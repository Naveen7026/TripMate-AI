import { ShieldCheck } from "lucide-react";

function RecoveryCard() {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Recovery</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">AI recovery plan</h2>
        </div>
        <div className="rounded-2xl bg-emerald-50 p-2.5 text-emerald-700">
          <ShieldCheck size={18} />
        </div>
      </div>

      <div className="mt-5 rounded-[20px] bg-emerald-50 p-4">
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> Alternate flight shortlisted</li>
          <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> Nearby hotel recommended</li>
          <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> Team coordinator updated</li>
        </ul>
      </div>
    </div>
  );
}

export default RecoveryCard;