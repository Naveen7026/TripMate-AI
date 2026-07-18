import { ArrowRight, CheckCircle2, Hotel, PhoneCall, ShieldCheck } from "lucide-react";

function Recovery() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(237,137,54,0.14),_transparent_30%),linear-gradient(135deg,_#fffaf4_0%,_#fff5e8_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="rounded-[34px] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                <ShieldCheck size={16} />
                Recovery mode active
              </div>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Keep the trip moving without losing comfort.
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-600">
                The assistant has turned disruption into a clear recovery plan with flights, stay options, and communications already prepared.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Priority status</p>
              <p>Rebook before 6:30 PM</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-amber-50 p-2 text-amber-700">
                <Hotel size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Stay nearby</h2>
                <p className="text-sm text-slate-600">Hotel suggestions close to the airport.</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600" /> Skyline Suites • 8 min transfer</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600" /> Harbor Stay • Free breakfast</li>
            </ul>
          </article>

          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-50 p-2 text-sky-700">
                <PhoneCall size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Notify your team</h2>
                <p className="text-sm text-slate-600">Your update is already prepared.</p>
              </div>
            </div>
            <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
              “We’ve secured a backup route and a nearby hotel. I’ll be arriving approximately 45 minutes later than planned.”
            </p>
            <a href="/summary" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-700">
              View summary <ArrowRight size={16} />
            </a>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Recovery;
