import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import FlightCard from "../components/FlightCard";
import WeatherCard from "../components/WeatherCard";
import StressScore from "../components/StressScore";
import RecoveryCard from "../components/RecoveryCard";
import SummaryCard from "../components/SummaryCard";
import ChatAssistant from "../components/ChatAssistant";
import { tripInsights } from "../Services/api";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),_transparent_25%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <section className="overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
                <Sparkles size={16} />
                AI trip control center
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Your journey is under control, and the next move is clear.
                </h1>
                <p className="mt-3 text-lg leading-8 text-slate-600">
                  TripMate AI is watching your flight, weather, and recovery path so you can respond calmly and quickly.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="/recovery" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
                  Review recovery plan <ArrowRight size={16} />
                </a>
                <a href="/flights" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                  Compare flights <Plane size={16} />
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">Live trip</p>
                  <h2 className="mt-2 text-2xl font-semibold">Mumbai → Singapore</h2>
                </div>
                <div className="rounded-2xl bg-white/10 p-2">
                  <ShieldCheck size={20} />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-center justify-between text-sm text-indigo-100">
                    <span>Departure window</span>
                    <span className="font-semibold text-white">03:12h</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-center justify-between text-sm text-indigo-100">
                    <span>Recovery confidence</span>
                    <span className="font-semibold text-white">94%</span>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-center justify-between text-sm text-indigo-100">
                    <span>Next action</span>
                    <span className="font-semibold text-white">Rebook now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 md:grid-cols-2">
            <FlightCard />
            <WeatherCard />
            <StressScore />
            <RecoveryCard />
          </div>

          <div className="space-y-6">
            <SummaryCard />
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Live insight</p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-900">Recommended next step</h2>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <ShieldCheck size={20} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {tripInsights.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                    <div className="rounded-xl bg-white p-2 text-indigo-600 shadow-sm">
                      <Clock3 size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ChatAssistant />
      </div>
    </div>
  );
}

export default Dashboard;
