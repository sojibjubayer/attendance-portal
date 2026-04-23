"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Mail, Lock, ArrowRight } from "lucide-react";

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

  const handleChange = (field: "companyId" | "email" | "password", value: string) => {
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
    <main className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-sky-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl lg:grid-cols-2">
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-sky-600 via-blue-600 to-pink-500 p-10 text-white lg:block">
            <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
                >
                  Portal
                </Link>

                <h1 className="mt-8 text-4xl font-black leading-tight">
                  Welcome back to your attendance portal
                </h1>

                <p className="mt-5 max-w-md text-base leading-7 text-white/85">
                  Secure company-based access for QR attendance, check-in,
                  lunch break tracking, and checkout management.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm text-white/75">Company-based access</p>
                  <p className="mt-1 text-lg font-semibold">
                    One portal for multiple companies
                  </p>
                </div>

                <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm text-white/75">QR powered attendance</p>
                  <p className="mt-1 text-lg font-semibold">
                    Secure check-in and checkout flow
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mx-auto w-full max-w-md">
              <div className="lg:hidden">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
                >
                  Portal
                </Link>
              </div>

              <div className="mt-6 lg:mt-0">
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
                  Staff Login
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">
                  Sign in to continue
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your company ID, company email, and password to access
                  your attendance page.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="companyId"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Company ID
                  </label>

                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
                    <Building2 className="h-5 w-5 text-slate-400" />
                    <input
                      id="companyId"
                      type="text"
                      placeholder="e.g. wmibc"
                      value={form.companyId}
                      onChange={(e) => handleChange("companyId", e.target.value)}
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Company Email
                  </label>

                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm focus-within:border-sky-400 focus-within:ring-4 focus-within:ring-sky-100">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-sky-600 via-blue-600 to-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Signing in..." : "Login to Portal"}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">
                Need access? Contact your company administrator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}