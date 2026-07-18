import { useState } from "react";
import { ArrowRight, Lock, Mail, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      setStatus("Please enter your email and password.");
      return;
    }

    setStatus("Login successful. Redirecting to your dashboard...");
    setTimeout(() => navigate("/dashboard"), 600);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),_transparent_26%),linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-sky-700 p-8 text-white sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
              <Sparkles size={16} />
              Welcome back
            </div>
            <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">
              Travel smarter with TripMate AI.
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              Sign in to access live itinerary help, recovery options, and your personalized travel insights.
            </p>
            <div className="mt-8 rounded-[24px] border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Why users love it</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-100">
                <li>• Live disruption updates</li>
                <li>• Instant recovery recommendations</li>
                <li>• Personalized travel timeline</li>
              </ul>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-50 p-2 text-indigo-700">
                <Lock size={18} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Login to your account</h2>
                <p className="text-sm text-slate-600">Access your travel control center</p>
              </div>
            </div>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Mail size={16} className="text-slate-400" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    className="w-full bg-transparent text-sm outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Lock size={16} className="text-slate-400" />
                  <input
                    type="password"
                    value={form.password}
                    onChange={(event) => setForm({ ...form, password: event.target.value })}
                    className="w-full bg-transparent text-sm outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </label>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
                Sign in <ArrowRight size={16} />
              </button>
            </form>

            {status && (
              <div className="mt-5 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                {status}
              </div>
            )}

            <p className="mt-6 text-sm text-slate-500">
              New to TripMate? <span className="font-semibold text-indigo-600">Create an account</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
