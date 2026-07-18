import { Sparkles } from "lucide-react";

function SummaryCard() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-violet-50 p-2.5 text-violet-700">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Summary</p>
          <h2 className="text-xl font-semibold text-slate-900">AI summary</h2>
        </div>
      </div>
      <div className="mt-5 rounded-[20px] bg-gradient-to-br from-violet-50 to-indigo-50 p-4">
        <p className="text-sm leading-7 text-slate-700">
          Your flight disruption is being handled with a backup option, a hotel recommendation, and a calm recovery route that keeps your agenda intact.
        </p>
      </div>
    </div>
  );
}

export default SummaryCard;