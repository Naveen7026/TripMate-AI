import { HeartPulse } from "lucide-react";

function StressScore() {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Stress</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">Travel pressure</h2>
        </div>
        <div className="rounded-2xl bg-rose-50 p-2.5 text-rose-700">
          <HeartPulse size={18} />
        </div>
      </div>

      <div className="mt-5 rounded-[20px] bg-rose-50 p-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-4xl font-semibold text-slate-900">62%</p>
            <p className="mt-1 text-sm text-slate-600">Moderate strain</p>
          </div>
          <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-rose-700">
            Stable
          </div>
        </div>
        <div className="mt-3 h-2 rounded-full bg-white/80">
          <div className="h-2 w-[62%] rounded-full bg-gradient-to-r from-rose-500 to-orange-400" />
        </div>
      </div>
    </div>
  );
}

export default StressScore;