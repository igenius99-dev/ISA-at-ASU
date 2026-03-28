import { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/SupabaseClient";
import { useAuth } from "../lib/AuthContextSupabase";
import DashboardSidebar from "./DashboardSidebar";
import { Button } from "./ui/button";
import { Upload, AlertCircle } from "lucide-react";

const API_BASE = "https://isaapisprintboot.igenius99.com/api";

const COPY = {
  subtitle:
    "Pick the three roles you’re running for, then upload your campaign video.",
  invalidMix:
    "That’s not a valid combination. Instead choose either 2 E-board + 1 Director or 1 E-board + 2 Directors or 3 Directors.",
  needThreePicks:
    "Select three roles using one of those combinations before you submit.",
  maxThree:
    "You’ve already chosen three roles. Uncheck one if you want to change your picks.",
  needVideo: "Please add a campaign video before submitting.",
  videoUpload:
    "We couldn’t upload your video. Try again, or use a smaller file if it’s very large.",
  positionsLoad:
    "We couldn’t load the open positions. Refresh the page or try again in a moment.",
  submitSuccess: "Your application was sent. You’re all set!",
  submitFail: "Something went wrong while submitting. Please try again.",
  authMissing: "Your login session expired. Please sign in again and retry.",
  alreadySubmitted:
    "Your election interest form has already been submitted. If you wish to make changes please contact Tushar.",
};

function categoryKey(category) {
  return (category ?? "").toUpperCase();
}

function getSelectionCounts(selectedIds, positionsById) {
  let eboard = 0;
  let director = 0;
  let other = 0;

  for (const id of selectedIds) {
    const p = positionsById.get(id);
    if (!p) continue;

    const c = categoryKey(p.category);
    if (c === "EBOARD") eboard++;
    else if (c === "DIRECTOR") director++;
    else other++;
  }

  return { eboard, director, other };
}

function isValidElectionSelection(selectedIds, positionsById) {
  if (selectedIds.length !== 3) return false;
  if (new Set(selectedIds).size !== 3) return false;

  const { eboard, director, other } = getSelectionCounts(
    selectedIds,
    positionsById,
  );

  if (other > 0) return false;

  return (
    (eboard === 2 && director === 1) ||
    (eboard === 1 && director === 2) ||
    (eboard === 0 && director === 3)
  );
}

function friendlySelectionError(selectedIds, positionsById) {
  if (selectedIds.length === 0) return COPY.needThreePicks;
  if (selectedIds.length < 3) return COPY.needThreePicks;

  if (new Set(selectedIds).size !== 3) {
    return "You’ve picked the same role twice. Uncheck duplicates so you have three different roles.";
  }

  const { other } = getSelectionCounts(selectedIds, positionsById);
  if (other > 0) return COPY.invalidMix;

  return COPY.invalidMix;
}

function friendlyApiSubmitMessage(serverError) {
  if (!serverError) return COPY.submitFail;

  const e = serverError.toLowerCase();

  if (e.includes("exactly 3")) return COPY.needThreePicks;
  if (e.includes("duplicate")) {
    return "Each pick has to be a different role. Remove any duplicate.";
  }
  if (
    e.includes("e-board") ||
    e.includes("director") ||
    e.includes("selection")
  ) {
    return COPY.invalidMix;
  }

  return COPY.submitFail;
}

export default function Election() {
  const { user, session } = useAuth();
  const navigate = useNavigate();
  const videoInputRef = useRef(null);

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const [positions, setPositions] = useState([]);
  const [positionsLoading, setPositionsLoading] = useState(true);
  const [positionsError, setPositionsError] = useState("");

  const [selectedIds, setSelectedIds] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  /** After JWT exists: GET /elections/me runs first; then positions load only if not already submitted. */
  const [electionGate, setElectionGate] = useState({
    ready: false,
    locked: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function checkMySubmission() {
      if (!user) {
        setElectionGate({ ready: true, locked: false });
        return;
      }
      if (!session?.access_token) {
        setElectionGate({ ready: false, locked: false });
        return;
      }

      setElectionGate({ ready: false, locked: false });

      try {
        const res = await fetch(`${API_BASE}/elections/me`, {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (cancelled) return;

        if (res.ok) {
          const data = await res.json();
          const st = (data?.status ?? "").toString().toUpperCase();
          setElectionGate({
            ready: true,
            locked: st === "SUBMITTED",
          });
        } else if (res.status === 404) {
          setElectionGate({ ready: true, locked: false });
        } else {
          setElectionGate({ ready: true, locked: false });
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setElectionGate({ ready: true, locked: false });
        }
      }
    }

    checkMySubmission();
    return () => {
      cancelled = true;
    };
  }, [user, session?.access_token]);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;

      setLoading(true);

      try {
        const { data } = await supabase
          .from("profiles")
          .select("name, photo_url, position, year")
          .eq("id", user.id)
          .maybeSingle();

        const isNew =
          !data ||
          !data.name ||
          !data.position ||
          !data.year ||
          data.year === "";

        if (isNew) {
          navigate("/dashboard", { replace: true });
          return;
        }

        setProfile(data);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [user, navigate]);

  useEffect(() => {
    async function fetchPositions() {
      if (!session?.access_token) {
        setPositionsLoading(false);
        return;
      }
      if (!electionGate.ready) {
        return;
      }

      setPositionsLoading(true);
      setPositionsError("");

      try {
        const res = await fetch(`${API_BASE}/elections/positions`, {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to load positions (${res.status})`);
        }

        const data = await res.json();
        setPositions(data);
      } catch (err) {
        console.error(err);
        setPositionsError(COPY.positionsLoad);
      } finally {
        setPositionsLoading(false);
      }
    }

    fetchPositions();
  }, [session, electionGate.ready]);

  useEffect(() => {
    return () => {
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
    };
  }, [videoPreview]);

  const positionsById = useMemo(
    () => new Map(positions.map((p) => [p.id, p])),
    [positions],
  );

  const selectionValid = isValidElectionSelection(selectedIds, positionsById);
  const canSubmit =
    !electionGate.locked &&
    selectionValid &&
    !!videoFile &&
    !positionsLoading &&
    !submitting;

  function togglePosition(id) {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        queueMicrotask(() =>
          setMessage((m) =>
            m.text === COPY.maxThree ? { text: "", type: "" } : m,
          ),
        );
        return prev.filter((p) => p !== id);
      }

      if (prev.length >= 3) {
        queueMicrotask(() =>
          setMessage({ text: COPY.maxThree, type: "error" }),
        );
        return prev;
      }

      return [...prev, id];
    });
  }

  function handleVideoSelect(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (videoPreview) {
      URL.revokeObjectURL(videoPreview);
    }

    setVideoFile(file);
    setVideoPreview(URL.createObjectURL(file));
    setMessage({ text: "", type: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (electionGate.locked) {
      setMessage({ text: COPY.alreadySubmitted, type: "error" });
      return;
    }

    if (!isValidElectionSelection(selectedIds, positionsById)) {
      setMessage({
        text: friendlySelectionError(selectedIds, positionsById),
        type: "error",
      });
      return;
    }

    if (!videoFile) {
      setMessage({ text: COPY.needVideo, type: "error" });
      return;
    }

    if (!user?.id || !session?.access_token) {
      setMessage({ text: COPY.authMissing, type: "error" });
      return;
    }

    setSubmitting(true);

    try {
      const { data: authData, error: authError } =
        await supabase.auth.getSession();

      console.log("Supabase auth session:", authData?.session);
      console.log("Supabase auth user:", authData?.session?.user);
      console.log("Context user:", user);

      if (authError || !authData?.session?.user) {
        console.error("Supabase auth session missing:", authError);
        throw new Error(COPY.authMissing);
      }

      const ext = (videoFile.name.split(".").pop() || "mp4").toLowerCase();
      const safeExt = ext.replace(/[^a-z0-9]/g, "") || "mp4";

      const videoPath = `elections/${user.id}/video-${Date.now()}.${safeExt}`;

      const { error: uploadError } = await supabase.storage
        .from("election-videos")
        .upload(videoPath, videoFile, {
          upsert: false,
          contentType: videoFile.type || `video/${safeExt}`,
          cacheControl: "3600",
        });

      if (uploadError) {
        console.error("UPLOAD ERROR FULL:", uploadError);
        throw new Error(uploadError.message || COPY.videoUpload);
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("election-videos").getPublicUrl(videoPath);

      const payload = {
        positionIds: selectedIds,
        videoUrl: publicUrl,
        videoPath,
      };

      const res = await fetch(`${API_BASE}/elections/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let serverMsg = "";
        try {
          const errJson = await res.json();
          serverMsg = errJson?.error ?? "";
        } catch {
          // ignore json parse issue
        }

        throw new Error(friendlyApiSubmitMessage(serverMsg));
      }

      setMessage({ text: COPY.submitSuccess, type: "success" });
      setElectionGate((g) => ({ ...g, locked: true }));
      setSelectedIds([]);
      setVideoFile(null);

      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
      setVideoPreview(null);

      if (videoInputRef.current) {
        videoInputRef.current.value = "";
      }
    } catch (err) {
      console.error("Election submit error:", err);

      const raw = err?.message ?? "";
      const friendlyKnown = [
        COPY.needVideo,
        COPY.invalidMix,
        COPY.needThreePicks,
        COPY.submitFail,
        COPY.videoUpload,
        COPY.maxThree,
        COPY.authMissing,
        "Each pick has to be a different role. Remove any duplicate.",
      ];

      setMessage({
        text: friendlyKnown.includes(raw) ? raw : raw || COPY.submitFail,
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const eboardPositions = positions.filter(
    (p) => categoryKey(p.category) === "EBOARD",
  );

  const directorPositions = positions.filter(
    (p) => categoryKey(p.category) === "DIRECTOR",
  );

  const otherPositions = positions.filter((p) => {
    const c = categoryKey(p.category);
    return c !== "EBOARD" && c !== "DIRECTOR";
  });

  function PositionGroup({
    title,
    items,
    readOnly = false,
    slateExcluded = false,
  }) {
    if (items.length === 0) return null;

    return (
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {title}
        </h3>

        {readOnly && slateExcluded && (
          <p className="text-xs text-gray-500">
            These roles are not part of this combined slate. Only E-board and
            Director positions apply.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((pos) => {
            const checked = selectedIds.includes(pos.id);

            return (
              <label
                key={pos.id}
                className={`flex items-center gap-3 p-4 rounded-xl border-1 transition-all duration-200 select-none ${
                  readOnly
                    ? "border-gray-100 bg-gray-50 opacity-70 cursor-not-allowed"
                    : checked
                      ? "border-saffron bg-saffron/5 shadow-sm cursor-pointer"
                      : "border-gray-200 hover:border-saffron/40 bg-white cursor-pointer"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  disabled={readOnly}
                  onChange={() => !readOnly && togglePosition(pos.id)}
                  className="sr-only"
                />

                <span
                  className={`flex-shrink-0 w-5 h-5 rounded border-1 flex items-center justify-center transition-colors duration-200 ${
                    checked
                      ? "bg-saffron border-saffron"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {checked && (
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>

                <span className="text-sm font-medium text-gray-800">
                  {pos.name}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }

  const waitingForSubmissionCheck =
    !!user && !!session?.access_token && !electionGate.ready;

  if (loading || waitingForSubmissionCheck) {
    return (
      <section className="min-h-[calc(100vh)] pt-24 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 text-lg"
        >
          Loading elections...
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh)] pt-24 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex gap-6 items-start">
          <DashboardSidebar profile={profile} userEmail={user?.email} />

          <main className="flex-1 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl mx-auto bg-white/90 backdrop-blur border-0 shadow-xl rounded-xl px-8 py-10 space-y-8"
              >
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-800">
                    Election Submission
                  </h1>
                  <p className="mt-2 text-sm text-gray-500">{COPY.subtitle}</p>
                </div>

                {electionGate.locked && (
                  <div
                    className="flex items-start gap-2 p-4 rounded-lg bg-blue-50 text-blue-950 text-sm border border-blue-200/80"
                    role="status"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {COPY.alreadySubmitted}
                  </div>
                )}

                {positionsLoading && (
                  <p className="text-center text-gray-400 text-sm py-4">
                    Loading positions...
                  </p>
                )}

                {positionsError && (
                  <div
                    className="flex items-start gap-2 p-4 rounded-lg bg-amber-50 text-amber-900 text-sm border border-amber-200/80"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {positionsError}
                  </div>
                )}

                {!positionsLoading && !positionsError && (
                  <>
                    <PositionGroup
                      title="E-Board Positions"
                      items={eboardPositions}
                      readOnly={electionGate.locked}
                    />
                    <PositionGroup
                      title="Director Positions"
                      items={directorPositions}
                      readOnly={electionGate.locked}
                    />
                    <PositionGroup
                      title="Other Positions"
                      items={otherPositions}
                      readOnly
                      slateExcluded
                    />

                    {selectedIds.length > 0 && (
                      <div className="text-sm text-gray-600 text-center space-y-2">
                        <p>
                          <span className="font-medium text-gray-800">
                            {selectedIds.length} of 3
                          </span>{" "}
                          roles chosen
                        </p>

                        {selectedIds.length < 3 && (
                          <p className="text-gray-500">
                            Pick {3 - selectedIds.length} more to finish.
                          </p>
                        )}

                        {selectedIds.length === 3 && !selectionValid && (
                          <p
                            className="text-amber-800 bg-amber-50 border border-amber-200/80 rounded-lg px-3 py-2 text-left max-w-md mx-auto"
                            role="status"
                          >
                            {COPY.invalidMix}
                          </p>
                        )}

                        {selectedIds.length === 3 && selectionValid && (
                          <p className="text-green-700 text-sm">
                            Looks good — add your video below when you’re ready
                            to send.
                          </p>
                        )}
                      </div>
                    )}

                    {positions.length === 0 && (
                      <p className="text-center text-gray-400 text-sm">
                        No positions are currently open for election.
                      </p>
                    )}
                  </>
                )}

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Campaign Video
                  </h3>

                  <div
                    onClick={() =>
                      !electionGate.locked && videoInputRef.current?.click()
                    }
                    className={`relative flex flex-col items-center justify-center gap-3 p-8 rounded-xl border-2 border-dashed transition-all duration-200 ${
                      electionGate.locked
                        ? "border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed"
                        : videoFile
                          ? "border-saffron bg-saffron/5 cursor-pointer"
                          : "border-gray-300 hover:border-saffron/50 bg-gray-50 cursor-pointer"
                    }`}
                  >
                    {videoPreview ? (
                      <video
                        src={videoPreview}
                        controls
                        className="w-full max-h-64 rounded-lg"
                      />
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          Click to upload your campaign video
                        </span>
                        <span className="text-xs text-gray-400">
                          MP4, MOV, or WebM
                        </span>
                      </>
                    )}
                  </div>

                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleVideoSelect}
                    disabled={electionGate.locked}
                    className="hidden"
                  />

                  {videoFile && (
                    <p className="text-xs text-gray-500 truncate">
                      Selected: {videoFile.name}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="indian"
                  size="lg"
                  className="w-full text-base font-semibold"
                  disabled={!canSubmit}
                >
                  {submitting ? "Submitting..." : "Submit Candidacy"}
                </Button>

                {message.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm text-center font-medium ${
                      message.type === "error"
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {message.text}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}
