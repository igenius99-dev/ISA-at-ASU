import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Vote, ClipboardCheck, Clock } from "lucide-react";
import { supabase } from "../lib/SupabaseClient";
import { useAuth } from "../lib/AuthContextSupabase";
import DashboardSidebar from "./DashboardSidebar";

export default function ElectionPlaceholder() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      supabase
        .from("profiles")
        .select("name, photo_url")
        .eq("id", user.id)
        .maybeSingle()
        .then(({ data }) => setProfile(data));
    }
  }, [user]);

  return (
    <section className="min-h-[calc(100vh)] pt-24 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4 flex gap-6 items-start">
        <DashboardSidebar profile={profile} userEmail={user?.email} />

        <main className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-3xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur border-0 shadow-xl rounded-xl px-8 py-14 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center gap-6"
              >
                <h2 className="text-3xl font-bold text-gray-800">Thank You!</h2>

                <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                  Thanks for filling out the election interest forms. We
                  appreciate your enthusiasm and participation!
                </p>

                <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-saffron/10 to-green-50 border border-saffron/20">
                  <span className="text-sm font-semibold text-gray-700">
                    Voting forms will be available soon
                  </span>
                </div>

                <p className="text-sm text-gray-400 max-w-sm mt-2">
                  Stay tuned, we'll notify you as soon as the voting forms are
                  live. In the meantime, keep an eye on your dashboard.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </section>
  );
}
