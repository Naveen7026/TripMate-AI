import { CloudRain } from "lucide-react";

function WeatherCard() {
  return (
    <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Weather</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">Mumbai</h2>
          <p className="mt-2 text-sm text-slate-600">Moderate rain and gusty winds.</p>
        </div>
        <div className="rounded-2xl bg-sky-50 p-2.5 text-sky-700">
          <CloudRain size={18} />
        </div>
      </div>

      <div className="mt-5 rounded-[20px] bg-gradient-to-br from-sky-50 to-indigo-50 p-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-semibold text-slate-900">24°</p>
            <p className="text-sm text-slate-600">Light drizzle</p>
          </div>
          <div className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700">
            48 min buffer
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;