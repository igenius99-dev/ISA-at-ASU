import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, ChevronDown, ChevronUp, Loader2, Trophy, Medal } from "lucide-react";
import { supabase } from "../lib/SupabaseClient";
import { useAuth } from "../lib/AuthContextSupabase";
import DashboardSidebar from "./DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const API_BASE = import.meta.env.VITE_API_BASE;

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

export default function AdminVotes() {
  const { user, session, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [voters, setVoters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedVoter, setExpandedVoter] = useState(null);

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
        const res = await fetch(`${API_BASE}/admin/votes`, {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!res.ok) {
          setError(`Failed to load vote data (HTTP ${res.status})`);
        } else {
          const data = await res.json();
          setVoters(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        setError(err.message);
      }

      setLoading(false);
    }

    load();
  }, [user, session, isAdmin, navigate]);

  const leaderboard = useMemo(() => {
    if (!voters.length) return [];

    const tally = {};
    for (const voter of voters) {
      for (const vote of voter.votes || []) {
        const key = vote.positionId;
        if (!tally[key]) {
          tally[key] = {
            positionId: vote.positionId,
            positionName: vote.positionName,
            positionCode: vote.positionCode,
            candidates: {},
          };
        }
        const cName = vote.candidateName || "Unknown";
        tally[key].candidates[cName] = (tally[key].candidates[cName] || 0) + 1;
      }
    }

    return Object.values(tally).map((pos) => {
      const sorted = Object.entries(pos.candidates)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);

      return { ...pos, ranked: sorted };
    });
  }, [voters]);

  function toggleExpand(odUserId) {
    setExpandedVoter((prev) => (prev === odUserId ? null : odUserId));
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
          Loading vote audit...
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
                <div className="bg-white/90 backdrop-blur shadow-xl rounded-xl px-8 py-8 mb-6">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                      Vote Audit
                    </h1>
                    <p className="text-gray-500 text-sm">
                      {voters.length === 0
                        ? "No votes have been cast yet."
                        : `${voters.length} voter${voters.length === 1 ? "" : "s"} total`}
                    </p>
                  </div>
                </div>

                {leaderboard.length > 0 && (
                  <div className="bg-white/90 backdrop-blur shadow-xl rounded-xl px-8 py-6 mb-6">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">
                      Results by Position
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {leaderboard.map((pos) => (
                        <div
                          key={pos.positionId}
                          className="rounded-lg border border-gray-100 p-4"
                        >
                          <p className="text-sm font-semibold text-gray-800 mb-3">
                            {pos.positionName}
                            <span className="ml-1.5 text-xs font-normal text-gray-400">
                              ({pos.positionCode})
                            </span>
                          </p>

                          {pos.ranked.length > 0 ? (
                            <div className="space-y-2">
                              {pos.ranked.map((c, i) => (
                                <div key={c.name} className="flex items-center gap-2">
                                  {i === 0 ? (
                                    <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                                  ) : i === 1 ? (
                                    <Medal className="w-4 h-4 text-gray-400 shrink-0" />
                                  ) : (
                                    <span className="w-4 text-center text-xs text-gray-400 shrink-0">
                                      {i + 1}
                                    </span>
                                  )}
                                  <span
                                    className={`text-sm truncate ${i === 0 ? "font-semibold text-gray-900" : "text-gray-600"}`}
                                  >
                                    {c.name}
                                  </span>
                                  <Badge
                                    variant={i === 0 ? "success" : "secondary"}
                                    className="ml-auto shrink-0 text-xs"
                                  >
                                    {c.count} vote{c.count !== 1 ? "s" : ""}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-xs text-gray-400 italic">
                              No votes yet
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                    {error}
                  </div>
                )}

                {voters.length > 0 && (
                  <ul className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
                    {voters.map((voter) => {
                      const isExpanded =
                        expandedVoter === voter.voterUserId;
                      const displayName =
                        voter.voterName?.trim() ||
                        voter.voterEmail ||
                        "Unknown voter";

                      return (
                        <li key={voter.voterUserId}>
                          <Card className="border border-gray-100 shadow-sm bg-white">
                            <CardHeader className="pb-2">
                              <button
                                type="button"
                                onClick={() =>
                                  toggleExpand(voter.voterUserId)
                                }
                                className="w-full flex items-center justify-between gap-3 text-left cursor-pointer"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-saffron/10 to-orange/10 flex items-center justify-center shrink-0">
                                    <Users className="w-4 h-4 text-saffron/60" />
                                  </div>
                                  <div className="min-w-0">
                                    <CardTitle className="text-base text-gray-900 truncate">
                                      {displayName}
                                    </CardTitle>
                                    {voter.voterName?.trim() &&
                                      voter.voterEmail && (
                                        <p className="text-xs text-gray-400 truncate mt-0.5">
                                          {voter.voterEmail}
                                        </p>
                                      )}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {voter.votes?.length || 0} vote
                                    {(voter.votes?.length || 0) !== 1
                                      ? "s"
                                      : ""}
                                  </Badge>
                                  {isExpanded ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                  )}
                                </div>
                              </button>
                            </CardHeader>

                            {isExpanded && (
                              <CardContent className="pt-0">
                                <div className="border-t border-gray-100 pt-4 space-y-3">
                                  <p className="text-xs text-gray-400">
                                    Voted on{" "}
                                    {formatDateTime(voter.votedAt)}
                                  </p>

                                  <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                      <thead>
                                        <tr className="text-left text-xs uppercase tracking-wide text-gray-400 border-b border-gray-100">
                                          <th className="pb-2 pr-4 font-medium">
                                            Position
                                          </th>
                                          <th className="pb-2 font-medium">
                                            Voted for
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {(voter.votes || []).map(
                                          (vote) => (
                                            <tr
                                              key={vote.positionId}
                                              className="border-b border-gray-50 last:border-0"
                                            >
                                              <td className="py-2.5 pr-4 text-gray-600 font-medium">
                                                {vote.positionName}
                                                <span className="ml-1.5 text-xs text-gray-400">
                                                  ({vote.positionCode})
                                                </span>
                                              </td>
                                              <td className="py-2.5 text-gray-800 font-semibold">
                                                {vote.candidateName}
                                              </td>
                                            </tr>
                                          ),
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </CardContent>
                            )}
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
