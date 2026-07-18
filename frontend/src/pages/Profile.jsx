import { Briefcase, CalendarDays, Mail, MapPin, Plane, ShieldCheck } from "lucide-react";

function Profile() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),_transparent_24%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 text-2xl font-semibold text-white">
                AK
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">Aarav Kumar</h1>
                <p className="text-sm text-slate-600">Business traveler • Premium plan</p>
              </div>
            </div>
            <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
              Verified traveler profile
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-50 p-2 text-indigo-700">
                <Briefcase size={18} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Travel preferences</h2>
                <p className="text-sm text-slate-600">Your saved preferences help TripMate AI personalize recovery and routing.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[20px] bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900"><Plane size={16} className="text-indigo-600" /> Preferred cabin</div>
                <p className="mt-2 text-sm text-slate-600">Business class</p>
              </div>
              <div className="rounded-[20px] bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900"><ShieldCheck size={16} className="text-emerald-600" /> Flexibility</div>
                <p className="mt-2 text-sm text-slate-600">High flexibility for reroutes</p>
              </div>
              <div className="rounded-[20px] bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900"><CalendarDays size={16} className="text-sky-600" /> Buffer time</div>
                <p className="mt-2 text-sm text-slate-600">45 minutes minimum</p>
              </div>
              <div className="rounded-[20px] bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900"><MapPin size={16} className="text-amber-600" /> Preferred airport</div>
                <p className="mt-2 text-sm text-slate-600">Mumbai International</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-50 p-2 text-sky-700">
                <Mail size={18} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Account details</h2>
                <p className="text-sm text-slate-600">Everything connected to your travel account.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="rounded-[20px] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Email</p>
                <p className="mt-1">aarav.kumar@example.com</p>
              </div>
              <div className="rounded-[20px] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Phone</p>
                <p className="mt-1">+91 98765 43210</p>
              </div>
              <div className="rounded-[20px] bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Company</p>
                <p className="mt-1">Northstar Consulting</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
