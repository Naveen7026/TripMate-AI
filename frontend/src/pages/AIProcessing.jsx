import { CheckCircle2, LoaderCircle, Sparkles, TrendingUp } from "lucide-react";

function AIProcessing() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.14),_transparent_30%),linear-gradient(135deg,_#f8faff_0%,_#eef4ff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
                <Sparkles size={16} />
                AI intelligence in progress
              </div>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Understanding your travel risk profile
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-600">
                The assistant is combining live delay signals, weather updates, and your personal preferences to produce the best next step.
              </p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-center">
              <div className="flex items-center justify-center text-indigo-600">
                <LoaderCircle size={28} className="animate-spin" />
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">Analyzing 7 signals</p>
              <p className="text-sm text-slate-600">92% complete</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-2 text-emerald-700">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">What the AI has confirmed</h2>
                <p className="text-sm text-slate-600">The actionable items are ready.</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              <li>• Backup carrier options were ranked by arrival time.</li>
              <li>• Weather severity at the destination stays manageable.</li>
              <li>• Hotel proximity to the airport has been shortlisted.</li>
            </ul>
          </article>

          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-50 p-2 text-sky-700">
                <TrendingUp size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Prediction confidence</h2>
                <p className="text-sm text-slate-600">High confidence in the next best action.</p>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              <div>
                <div className="mb-2 flex justify-between text-sm text-slate-600">
                  <span>Alternative routing</span>
                  <span>88%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[88%] rounded-full bg-indigo-600" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm text-slate-600">
                  <span>Recovery plan fit</span>
                  <span>94%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[94%] rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default AIProcessing;
