import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { User, Briefcase, Camera, LogOut } from "lucide-react";
import { supabase } from "../lib/SupabaseClient";
import { useAuth } from "../lib/AuthContextSupabase";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const YEAR_OPTIONS = [
  "Freshman",
  "Sophomore",
  "Junior",
  "Senior",
  "Graduate",
  "PhD",
];

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [year, setYear] = useState("");
  const [photoURL, setPhotoURL] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (user) fetchProfile();
  }, [user]);

  async function fetchProfile() {
    setLoading(true);
    const { data } = await supabase
      .from("profiles")
      .select("name, position, year, photo_url")
      .eq("id", user.id)
      .maybeSingle();

    if (data) {
      setName(data.name ?? "");
      setPosition(data.position ?? "");
      setYear(data.year ?? "");
      setPhotoURL(data.photo_url ?? null);
    }
    setLoading(false);
  }

  function handlePhotoSelect(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoURL(URL.createObjectURL(file));
  }

  function handleLinkedInChange(e) {
    setLinkedinUrl(e.target.value);
  }

  function handleInstagramChange(e) {
    setInstagramUrl(e.target.value);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setMessage({ text: "", type: "" });

    let uploadedPhotoURL = photoURL;

    if (photoFile) {
      const ext = photoFile.name.split(".").pop();
      const path = `${user.id}/avatar.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(path, photoFile, { upsert: true });

      if (uploadError) {
        setMessage({ text: uploadError.message, type: "error" });
        setSaving(false);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("avatars").getPublicUrl(path);
      uploadedPhotoURL = publicUrl;
    }

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      name,
      position,
      year,
      photo_url: uploadedPhotoURL,
      updated_at: new Date().toISOString(),
      linkedinurl: linkedinUrl,
      instagramurl: instagramUrl,
    });

    if (error) {
      setMessage({ text: error.message, type: "error" });
    } else {
      setMessage({ text: "Profile saved successfully!", type: "success" });
      setPhotoFile(null);
    }
    setSaving(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  if (loading) {
    return (
      <section className="min-h-[calc(100vh)] pt-24 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-green-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-gray-500"
        >
          Loading profile...
        </motion.div>
      </section>
    );
  }

  const profileForSidebar = {
    name,
    photo_url: photoURL,
  };

  return (
    <section className="min-h-[calc(100vh)] pt-24 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4 flex gap-6 items-start">
        <DashboardSidebar profile={profileForSidebar} userEmail={user?.email} />

        <main className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-3xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur border-0 shadow-xl rounded-xl px-8 py-8">
              <header className="text-center pb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800">
                    Your Profile
                  </h2>
                  <p className="text-gray-600 mt-2 text-base">{user?.email}</p>
                </motion.div>
              </header>

              <form onSubmit={handleSave} className="space-y-6">
                {/* Avatar */}
                <div className="flex flex-col items-center gap-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="relative group"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden border-saffron/30 shadow-lg bg-gradient-to-br from-saffron/10 to-orange/10 flex items-center justify-center">
                      {photoURL ? (
                        <img
                          src={photoURL}
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-12 h-12 text-saffron/50" />
                      )}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoSelect}
                    className="hidden"
                  />
                  <span className="text-xs text-gray-400">
                    Click to upload photo
                  </span>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Position in ISA */}
                <div className="space-y-2">
                  <label
                    htmlFor="position"
                    className="text-sm font-medium text-gray-700"
                  >
                    Position in ISA
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="position"
                      type="text"
                      placeholder="e.g. President, Treasurer, Member"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all duration-200"
                    />
                  </div>
                </div>

                {/* LinkedIn URL */}
                <div className="space-y-2">
                  <label
                    htmlFor="linkedinUrl"
                    className="text-sm font-medium text-gray-700"
                  >
                    LinkedIn URL (Optional)
                  </label>
                  <input
                    id="linkedinUrl"
                    type="url"
                    placeholder="https://linkedin.com/in/your-handle"
                    value={linkedinUrl}
                    onChange={handleLinkedInChange}
                    className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all duration-200"
                  />
                </div>

                {/* Instagram URL */}
                <div className="space-y-2">
                  <label
                    htmlFor="instagramUrl"
                    className="text-sm font-medium text-gray-700"
                  >
                    Instagram URL (Optional)
                  </label>
                  <input
                    id="instagramUrl"
                    type="url"
                    placeholder="https://instagram.com/your-handle"
                    value={instagramUrl}
                    onChange={handleInstagramChange}
                    className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all duration-200"
                  />
                </div>

                {/* Year in College */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Year in College
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {YEAR_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setYear(opt)}
                        className={`py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 border ${
                          year === opt
                            ? "bg-gradient-to-r from-saffron to-orange text-white shadow-md border-transparent"
                            : "border-gray-200 text-gray-600 hover:border-saffron/40 hover:text-gray-800"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Save */}
                <Button
                  type="submit"
                  variant="indian"
                  size="lg"
                  className="w-full text-base font-semibold mt-2"
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Profile"}
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

              {/* Sign out */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="flex items-center gap-2 mx-auto text-sm text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </section>
  );
}
