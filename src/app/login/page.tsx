"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Lock,
  Mail,
  QrCode,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type LoginResponse = {
  message?: string;
  redirectTo?: string;
};

export default function LoginPage() {
  const [form, setForm] = useState({
    companyId: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    field: "companyId" | "email" | "password",
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: field === "companyId" ? value.toLowerCase() : value,
    }));

    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data: LoginResponse = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      window.location.href = data.redirectTo || `/${form.companyId}/attendance`;
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111F] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,#2563EB45,transparent_34%),radial-gradient(circle_at_85%_15%,#7C3AED40,transparent_32%),radial-gradient(circle_at_50%_95%,#EC489930,transparent_35%)]" />

      <div className="absolute left-10 top-16 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-4xl border border-white/10 bg-white/6 shadow-2xl shadow-black/40 backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative hidden overflow-hidden p-10 lg:block">
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/30 via-violet-600/25 to-pink-500/25" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur"
                >
                  <Sparkles size={16} />
                  Samira Cloud
                </Link>

                <h1 className="mt-10 max-w-lg text-5xl font-black leading-tight tracking-tight">
                  Secure company attendance starts here
                </h1>

                <p className="mt-5 max-w-md text-base leading-8 text-slate-200">
                  Login with company ID, staff email, and password to access QR
                  attendance, break tracking, reports, and staff dashboard.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Company-wise secure access",
                    desc: "Separate login and dashboard for every company.",
                  },
                  {
                    icon: QrCode,
                    title: "QR powered attendance",
                    desc: "Protected check-in, lunch, and checkout flow.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Payroll-ready tracking",
                    desc: "Attendance records ready for admin review.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition duration-500 hover:bg-white/15"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-white/10 p-3">
                          <Icon className="h-5 w-5 text-pink-200" />
                        </div>
                        <div>
                          <p className="font-bold">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-300">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-white p-6 text-slate-900 sm:p-8 lg:p-10">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8 flex items-center justify-between lg:hidden">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <Sparkles size={15} />
                  Samira Cloud
                </Link>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-pink-500">
                  Staff Login
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Sign in to portal
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your company ID, email, and password to continue.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <InputBox
                  label="Company ID"
                  id="companyId"
                  type="text"
                  placeholder="e.g. wmibc"
                  value={form.companyId}
                  icon={Building2}
                  onChange={(value) => handleChange("companyId", value)}
                />

                <InputBox
                  label="Company Email"
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={form.email}
                  icon={Mail}
                  onChange={(value) => handleChange("email", value)}
                />

                <InputBox
                  label="Password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={form.password}
                  icon={Lock}
                  onChange={(value) => handleChange("password", value)}
                />

                {error && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 px-6 py-4 text-sm font-black text-white shadow-xl shadow-pink-500/20 transition duration-500 hover:-translate-y-0.5 hover:shadow-pink-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Signing in..." : "Login to Portal"}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">
                Need access? Contact your company administrator.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

type InputBoxProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  icon: React.ElementType;
  onChange: (value: string) => void;
};

function InputBox({
  label,
  id,
  type,
  placeholder,
  value,
  icon: Icon,
  onChange,
}: InputBoxProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold text-slate-700"
      >
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 shadow-sm transition duration-300 focus-within:border-violet-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">
        <Icon className="h-5 w-5 text-slate-400" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
          required
        />
      </div>
    </div>
  );
}