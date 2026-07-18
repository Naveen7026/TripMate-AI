import { NavLink } from "react-router-dom";
import { Compass, Plane, Sparkles, ShieldCheck, LayoutGrid } from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { to: "/flights", label: "Flights", icon: Plane },
  { to: "/recovery", label: "Recovery", icon: ShieldCheck },
  { to: "/summary", label: "Summary", icon: Compass },
  { to: "/profile", label: "AI", icon: Sparkles },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-full border border-slate-200 bg-white/90 p-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 px-2">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-500 p-2.5 text-white shadow-lg shadow-indigo-200">
            <Plane size={18} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">TripMate AI</h2>
            <p className="text-sm text-slate-500">Travel disruption control center</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 px-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;