import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/SupabaseClient";
import { useAuth } from "../lib/AuthContextSupabase";
import DashboardSidebar from "./DashboardSidebar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  CheckCircle,
  ExternalLink,
  AlertCircle,
  Vote,
  Loader2,
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE;

const EBOARD_ORDER = [
  "PRESIDENT",
  "VICE_PRESIDENT",
  "SECRETARY",
  "JOINT_SECRETARY",
  "TREASURER",
];

function sortPositions(positions) {
  return [...positions].sort((a, b) => {
    const aIsEboard = a.category === "EBOARD";
    const bIsEboard = b.category === "EBOARD";
    if (aIsEboard && !bIsEboard) return -1;
    if (!aIsEboard && bIsEboard) return 1;
    if (aIsEboard && bIsEboard) {
      return EBOARD_ORDER.indexOf(a.code) - EBOARD_ORDER.indexOf(b.code);
    }
    return a.name.localeCompare(b.name);
  });
}

function displayPositionName(position) {
  if (position.category === "DIRECTOR") {
    return `Director of ${position.name}`;
  }
  return position.name;
}

export default function Voting() {
  const { user, session } = useAuth();

  const [profile, setProfile] = useState(null);
  const [positions, setPositions] = useState([]);
  const [selections, setSelections] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function print() {
    const { data } = await supabase.auth.getSession();
    console.log(data.session.access_token);
  }
  print();

  useEffect(() => {
    if (!user || !session) return;

    async function load() {
      setLoading(true);
      setError(null);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("name, photo_url")
        .eq("id", user.id)
        .maybeSingle();
      setProfile(profileData);

      try {
        const [statusRes, candidatesRes] = await Promise.all([
          fetch(`${API_BASE}/voting/status`, {
            headers: { Authorization: `Bearer ${session.access_token}` },
          }),
          fetch(`${API_BASE}/voting/candidates`, {
            headers: { Authorization: `Bearer ${session.access_token}` },
          }),
        ]);

        if (statusRes.ok) {
          const statusData = await statusRes.json();
          setHasVoted(statusData.hasVoted);
        }

        if (candidatesRes.ok) {
          const candidatesData = await candidatesRes.json();
          const HIDDEN_POSITIONS = ["JOINT_SECRETARY", "TREASURER"];
          const filtered = candidatesData.filter(
            (p) => !HIDDEN_POSITIONS.includes(p.code),
          );
          setPositions(sortPositions(filtered));
        } else {
          setError("Failed to load candidates. Please refresh the page.");
        }
      } catch (err) {
        setError("Something went wrong. Please try again later.");
      }

      setLoading(false);
    }

    load();
  }, [user, session]);

  function handleSelect(positionId, candidateSubmissionId) {
    if (hasVoted || success) return;
    setSelections((prev) => ({
      ...prev,
      [positionId]: candidateSubmissionId,
    }));
  }

  const positionsWithCandidates = positions.filter(
    (p) => p.candidates && p.candidates.length > 0,
  );
  const totalVotable = positionsWithCandidates.length;
  const totalSelected = Object.keys(selections).length;

  async function handleSubmit() {
    if (submitting || hasVoted || success) return;

    const missing = positionsWithCandidates.filter(
      (p) => !selections[p.positionId],
    );
    if (missing.length > 0) {
      setError(
        `Please select a candidate for: ${missing.map((p) => p.name).join(", ")}`,
      );
      return;
    }

    setSubmitting(true);
    setError(null);

    const votes = Object.entries(selections).map(
      ([positionId, candidateSubmissionId]) => ({
        positionId: Number(positionId),
        candidateSubmissionId,
      }),
    );

    try {
      const res = await fetch(`${API_BASE}/voting/submit`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ votes }),
      });

      if (res.ok) {
        setSuccess(true);
        setHasVoted(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.message || "Failed to submit votes. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }

    setSubmitting(false);
  }

  if (loading) {
    return (
      <section className="min-h-[calc(100vh)] pt-24 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-gray-500 text-lg"
        >
          <Loader2 className="w-5 h-5 animate-spin" />
          Loading voting booth...
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh)] pt-24 pb-20 md:pb-0 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex gap-6 items-start">
          <DashboardSidebar profile={profile} userEmail={user?.email} />

          <main className="flex-1 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="w-full max-w-4xl mx-auto">
                {hasVoted && !success ? (
                  <AlreadyVotedCard />
                ) : success ? (
                  <SuccessCard />
                ) : (
                  <>
                    <div className="bg-white/90 backdrop-blur shadow-xl rounded-xl px-8 py-8 mb-6">
                      <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                          Cast Your Vote
                        </h1>
                        <p className="text-gray-500 text-sm max-w-lg mx-auto">
                          Select one candidate for each position below. Once
                          submitted, your vote cannot be changed.
                        </p>
                      </div>

                      {totalVotable > 0 && (
                        <div className="flex justify-center mt-4">
                          <Badge
                            variant={
                              totalSelected === totalVotable
                                ? "success"
                                : "secondary"
                            }
                          >
                            {totalSelected} / {totalVotable} positions selected
                          </Badge>
                        </div>
                      )}
                    </div>

                    {error && (
                      <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                        {error}
                      </div>
                    )}

                    {positionsWithCandidates.length === 0 ? (
                      <div className="bg-white/90 backdrop-blur shadow-xl rounded-xl px-8 py-14 text-center">
                        <p className="text-gray-500 text-lg">
                          No candidates are available for voting yet.
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                          Check back later once candidates are approved.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {positions.map((position) => (
                          <PositionCard
                            key={position.positionId}
                            position={position}
                            selectedId={selections[position.positionId]}
                            onSelect={(candidateId) =>
                              handleSelect(position.positionId, candidateId)
                            }
                          />
                        ))}

                        <div className="flex justify-center pt-2 pb-4">
                          <Button
                            variant="indian"
                            size="lg"
                            onClick={handleSubmit}
                            disabled={
                              submitting ||
                              totalSelected !== totalVotable ||
                              totalVotable === 0
                            }
                            className="min-w-[200px]"
                          >
                            {submitting ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                <Vote className="w-4 h-4 mr-2" />
                                Submit Votes
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}

function PositionCard({ position, selectedId, onSelect }) {
  const hasCandidates = position.candidates && position.candidates.length > 0;

  return (
    <Card className="shadow-sm bg-white/90 backdrop-blur">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg text-gray-900">
              {displayPositionName(position)}
            </CardTitle>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
              {position.category === "EBOARD" ? "E-Board" : "Director"}
            </p>
          </div>
          {selectedId && (
            <Badge variant="success" className="shrink-0">
              <CheckCircle className="w-3 h-3 mr-1" />
              Selected
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {!hasCandidates ? (
          <p className="text-sm text-gray-400 italic">
            No candidates for this position
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {position.candidates.map((candidate) => {
              const isSelected = selectedId === candidate.submissionId;
              return (
                <button
                  key={candidate.submissionId}
                  type="button"
                  onClick={() => onSelect(candidate.submissionId)}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-saffron bg-gradient-to-br from-saffron/5 to-orange-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-saffron/40 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p
                        className={`font-semibold truncate ${isSelected ? "text-gray-900" : "text-gray-700"}`}
                      >
                        {candidate.fullName || candidate.email || "Candidate"}
                      </p>
                      {candidate.fullName && candidate.email && (
                        <p className="text-xs text-gray-400 truncate mt-0.5">
                          {candidate.email}
                        </p>
                      )}
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? "border-saffron bg-saffron"
                          : "border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                  </div>

                  {candidate.videoUrl && (
                    <a
                      href={candidate.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 font-medium mt-2"
                    >
                      Watch campaign video
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function AlreadyVotedCard() {
  return (
    <div className="bg-white/90 backdrop-blur border-0 shadow-xl rounded-xl px-8 py-14 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          You've Already Voted
        </h2>
        <p className="text-gray-600 text-lg max-w-md leading-relaxed">
          Thank you for participating in the election! Your vote has been
          recorded successfully.
        </p>
        <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100">
          <span className="text-sm font-semibold text-green-700">
            Results will be announced soon
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function SuccessCard() {
  return (
    <div className="bg-white/90 backdrop-blur border-0 shadow-xl rounded-xl px-8 py-14 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-saffron/20 to-green-100 flex items-center justify-center"
        >
          <CheckCircle className="w-8 h-8 text-green-600" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800">Vote Submitted!</h2>
        <p className="text-gray-600 text-lg max-w-md leading-relaxed">
          Your votes have been recorded successfully. Thank you for
          participating in the ISA election!
        </p>
        <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-saffron/10 to-green-50">
          <span className="text-sm font-semibold text-gray-700">
            Results will be announced soon
          </span>
        </div>
      </motion.div>
    </div>
  );
}
