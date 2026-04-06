import { NavLink } from "react-router-dom";
import {
  User,
  Vote,
  BarChart3,
  CheckSquare,
  ClipboardList,
} from "lucide-react";
import { useAuth } from "../lib/AuthContextSupabase";

export default function DashboardSidebar({ profile, userEmail }) {
  const { isAdmin } = useAuth();

  const sidebarLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-xl border transition-colors ${
      isActive
        ? "bg-white shadow-sm border-saffron/30 text-saffron"
        : "bg-white/50 hover:bg-white border-gray-200 text-gray-700"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
      isActive ? "text-saffron" : "text-gray-500"
    }`;

  const links = [
    { to: "/dashboard", end: true, icon: User, label: "Profile" },
    ...(isAdmin
      ? [
          { to: "/dashboard/statistics", icon: BarChart3, label: "Campaign" },
          {
            to: "/dashboard/admin-votes",
            icon: ClipboardList,
            label: "Vote Audit",
          },
        ]
      : []),
  ];

  return (
    <>
      {/* Desktop sidebar */}
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
                <div className="text-xs text-gray-500 truncate">
                  {userEmail}
                </div>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 py-5 flex flex-col gap-2">
            {links.map(({ to, end, icon: Icon, label }) => (
              <NavLink key={to} to={to} end={end} className={sidebarLinkClass}>
                <Icon className="w-4 h-4" />
                <span className="text-sm font-semibold">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200/60 safe-bottom">
        <div className="flex justify-around items-center px-2 pb-[env(safe-area-inset-bottom)]">
          {links.map(({ to, end, icon: Icon, label }) => (
            <NavLink key={to} to={to} end={end} className={mobileLinkClass}>
              <Icon className="w-5 h-5" />
              <span className="text-[11px] font-medium">{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
