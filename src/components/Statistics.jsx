import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { supabase } from "../lib/SupabaseClient";
import { useAuth } from "../lib/AuthContextSupabase";
import DashboardSidebar from "./DashboardSidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const API_BASE = "https://isaapisprintboot.igenius99.com/api";

function normalizeSubmissions(data) {
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
}

function formatDateTime(iso) {
  if (!iso) return "—";
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function sortedPositions(positions) {
  if (!positions?.length) return [];
  return [...positions].sort(
    (a, b) => (a.preferenceOrder ?? 0) - (b.preferenceOrder ?? 0),
  );
}

function statusBadgeVariant(status) {
  const s = (status || "").toUpperCase();
  if (s === "SUBMITTED") return "success";
  if (s === "DRAFT") return "secondary";
  return "outline";
}

export default function Statistics() {
  const { user, session, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/dashboard", { replace: true });
      return;
    }

    async function load() {
      setLoading(true);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("name, photo_url")
        .eq("id", user.id)
        .maybeSingle();

      setProfile(profileData);

      try {
        const res = await fetch(`${API_BASE}/admin/submissions`, {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!res.ok) {
          setError(`Failed to load submissions (HTTP ${res.status})`);
        } else {
          const data = await res.json();
          console.log(data);
          setSubmissions(normalizeSubmissions(data));
        }
      } catch (err) {
        setError(err.message);
      }

      setLoading(false);
    }

    load();
  }, [user, session, isAdmin, navigate]);

  if (loading) {
    return (
      <section className="min-h-[calc(100vh)] pt-24 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 text-lg"
        >
          Loading statistics...
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
              <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur border-0 shadow-xl rounded-xl px-8 py-10">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
                  Election submissions
                </h1>
                {!error && (
                  <p className="text-center text-sm text-gray-500 mb-6">
                    {submissions.length === 0
                      ? "No submissions yet."
                      : `${submissions.length} submission${submissions.length === 1 ? "" : "s"}`}
                  </p>
                )}

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                    {error}
                  </div>
                )}

                {submissions.length > 0 && (
                  <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                    {submissions.map((row) => {
                      const displayName =
                        row.fullName?.trim() || row.email || "Unknown";
                      const positions = sortedPositions(row.positions);
                      return (
                        <li key={row.submissionId || row.userId}>
                          <Card className="border border-gray-100 shadow-sm bg-white">
                            <CardHeader className="pb-2">
                              <div className="flex flex-wrap items-start justify-between gap-2">
                                <div>
                                  <CardTitle className="text-lg text-gray-900">
                                    {displayName}
                                  </CardTitle>
                                  {row.fullName?.trim() && row.email && (
                                    <CardDescription className="mt-1">
                                      {row.email}
                                    </CardDescription>
                                  )}
                                </div>
                                {row.status && (
                                  <Badge
                                    variant={statusBadgeVariant(row.status)}
                                    className="shrink-0"
                                  >
                                    {row.status}
                                  </Badge>
                                )}
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm text-gray-600">
                              {positions.length > 0 && (
                                <div>
                                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2">
                                    Position preferences
                                  </p>
                                  <ol className="list-decimal list-inside space-y-1.5 text-gray-800">
                                    {positions.map((p) => (
                                      <li key={p.positionId}>
                                        <span className="font-medium">
                                          {p.name || p.code}
                                        </span>
                                        {p.category && (
                                          <span className="text-gray-500">
                                            {" "}
                                            · {p.category}
                                          </span>
                                        )}
                                      </li>
                                    ))}
                                  </ol>
                                </div>
                              )}
                              {row.videoUrl && (
                                <a
                                  href={row.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-medium"
                                >
                                  Watch campaign video
                                  <ExternalLink
                                    className="h-3.5 w-3.5"
                                    aria-hidden
                                  />
                                </a>
                              )}
                            </CardContent>
                          </Card>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}
