import { NavLink } from "react-router-dom";
import { User, Vote, BarChart3 } from "lucide-react";
import { useAuth } from "../lib/AuthContextSupabase";

export default function DashboardSidebar({ profile, userEmail }) {
  const { isAdmin } = useAuth();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-xl border transition-colors ${
      isActive
        ? "bg-white shadow-sm border-saffron/30 text-saffron"
        : "bg-white/50 hover:bg-white border-gray-200 text-gray-700"
    }`;

  return (
    <aside className="hidden md:block w-72 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)]">
      <div className="h-full bg-white/80 backdrop-blur-sm border-r border-gray-200/50 flex flex-col">
        <div className="px-5 py-6 border-b border-gray-200/50">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-saffron/30 bg-gradient-to-br from-saffron/10 to-orange/10 flex items-center justify-center">
              {profile?.photo_url ? (
                <img
                  src={profile.photo_url}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-6 h-6 text-saffron/50" />
              )}
            </div>

            <div className="min-w-0">
              <div className="font-semibold text-gray-800 truncate">
                {profile?.name || "Profile"}
              </div>
              <div className="text-xs text-gray-500 truncate">{userEmail}</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-5 flex flex-col gap-2">
          <NavLink to="/dashboard" end className={linkClass}>
            <User className="w-4 h-4" />
            <span className="text-sm font-semibold">Profile</span>
          </NavLink>

          <NavLink to="/dashboard/elections" className={linkClass}>
            <Vote className="w-4 h-4" />
            <span className="text-sm font-semibold">Elections</span>
          </NavLink>

          {isAdmin && (
            <NavLink to="/dashboard/statistics" className={linkClass}>
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-semibold">Campaign</span>
            </NavLink>
          )}
        </nav>
      </div>
    </aside>
  );
}
