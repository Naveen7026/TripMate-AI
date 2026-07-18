import { useEffect, useState } from "react";
import { ArrowRight, Clock3, Plane, Sparkles, Star } from "lucide-react";

const flightOptions = [
  {
    title: "AI 608",
    time: "06:15 PM",
    duration: "2h 20m",
    status: "Best match",
    price: "$248",
  },
  {
    title: "SQ 418",
    time: "07:40 PM",
    duration: "2h 05m",
    status: "Flexible",
    price: "$286",
  },
  {
    title: "EK 224",
    time: "09:10 PM",
    duration: "2h 35m",
    status: "Premium",
    price: "$312",
  },
];

function AlternativeFlights() {
  const [selectedFlight, setSelectedFlight] = useState(() => {
    if (typeof window === "undefined") return "";
    return window.localStorage.getItem("selectedFlight") || "";
  });

  useEffect(() => {
    window.localStorage.setItem("selectedFlight", selectedFlight);
  }, [selectedFlight]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_30%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="rounded-[34px] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                <Sparkles size={16} />
                Recovery-ready alternatives
              </div>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Faster reroutes, better comfort
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-600">
                TripMate AI has surfaced the best replacement options to keep your journey aligned with your priorities.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Current disruption</p>
              <p>Flight AI302 delayed by 2h 15m</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4">
          {flightOptions.map((flight) => (
            <article key={flight.title} className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-700">
                  <Plane size={20} />
                </div>
                <div>
                  <p className="text-xl font-semibold text-slate-900">{flight.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{flight.time} • {flight.duration}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {flight.status}
                </div>
                <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                  <Clock3 size={14} />
                  15 min boarding window
                </div>
                <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                  <Star size={14} />
                  {flight.price}
                </div>
              </div>
              <button
                onClick={() => setSelectedFlight(flight.title)}
                className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ${
                  selectedFlight === flight.title
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-900 text-white"
                }`}
              >
                {selectedFlight === flight.title ? "Selected" : "Select"} <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </section>

        {selectedFlight && (
          <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
            Saved selection: {selectedFlight}
          </div>
        )}
      </div>
    </div>
  );
}

export default AlternativeFlights;
