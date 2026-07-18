import { ArrowRight, CheckCircle2, Clock3, MapPin, Plane } from "lucide-react";

function TripSummary() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_30%),linear-gradient(135deg,_#f8fff8_0%,_#f1fdf5_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="rounded-[34px] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Trip summary</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                You’re prepared for the next leg of the journey.
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-600">
                The assistant has organized your current trip status, backup routes, and recovery actions into one simple view.
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              <p className="font-semibold">Status: On track</p>
              <p>Arrival confidence 84%</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-50 p-2 text-indigo-700">
                <Plane size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Travel timeline</h2>
                <p className="text-sm text-slate-600">Proactive steps already in motion.</p>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              {[
                ["04:30 PM", "Backup flight shortlist generated"],
                ["05:00 PM", "Hotel options near the airport shared"],
                ["05:45 PM", "Manager notification confirmed"],
              ].map(([time, event]) => (
                <div key={time} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                  <Clock3 size={16} className="mt-0.5 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-slate-900">{time}</p>
                    <p className="text-sm text-slate-600">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-2 text-emerald-700">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">What’s ready</h2>
                <p className="text-sm text-slate-600">Everything you need to keep moving.</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-indigo-600" /> New airport transfer suggestion</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600" /> 2 alternate itineraries shortlisted</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-600" /> Recovery checklist in sync with your team</li>
            </ul>
            <a href="/dashboard" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
              Return to dashboard <ArrowRight size={16} />
            </a>
          </article>
        </section>
      </div>
    </div>
  );
}

export default TripSummary;
