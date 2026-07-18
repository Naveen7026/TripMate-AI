import { Plane } from "lucide-react";

function FlightCard() {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400" />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Flight</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">AI302 • Gate C12</h2>
          <p className="mt-2 text-sm text-slate-600">Mumbai → Singapore</p>
        </div>
        <div className="rounded-2xl bg-indigo-50 p-2.5 text-indigo-700">
          <Plane size={18} />
        </div>
      </div>

      <div className="mt-5 rounded-[20px] bg-slate-50 p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">Boarding</span>
          <span className="font-semibold text-slate-900">35 min</span>
        </div>
        <div className="mt-3 h-2 rounded-full bg-slate-200">
          <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-indigo-600 to-sky-500" />
        </div>
        <div className="mt-3 rounded-2xl bg-amber-50 p-3 text-sm font-medium text-amber-700">
          Delayed by 2h 15m • Rebooking recommended
        </div>
      </div>
    </div>
  );
}

export default FlightCard;