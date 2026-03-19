import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/SupabaseClient";
import { useAuth } from "../lib/AuthContextSupabase";
import DashboardSidebar from "./DashboardSidebar";

export default function Election() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;

      setLoading(true);
      const { data } = await supabase
        .from("profiles")
        .select("name, photo_url, position, year")
        .eq("id", user.id)
        .maybeSingle();

      // Treat users as "new" when they don't have a profile row yet
      // or when key fields are missing.
      const isNew =
        !data || !data.name || !data.position || !data.year || data.year === "";

      if (isNew) {
        navigate("/dashboard", { replace: true });
        return;
      }

      setProfile(data);
      setLoading(false);
    }

    loadProfile();
  }, [user, navigate]);

  if (loading) {
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
          <DashboardSidebar
            profile={profile}
            userEmail={user?.email}
          />

          <main className="flex-1 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="w-full max-w-3xl mx-auto bg-white/90 backdrop-blur border-0 shadow-xl rounded-xl px-8 py-10">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-800">
                    Elections
                  </h1>
                  <div className="mt-3 text-sm font-semibold text-saffron">
                    Coming soon
                  </div>
                </div>

                <div className="mt-10 text-center text-gray-700 leading-relaxed">
                  More election details are on the way.
                  <div className="mt-2 text-sm text-gray-600">
                    Soon you’ll be able to view timelines, candidates, and
                    submit votes inside your ISA dashboard.
                  </div>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}

