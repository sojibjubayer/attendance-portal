"use client";

import { ArrowRight, Building2, Mail, LockKeyhole } from "lucide-react";

export default function LoginCard() {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-pink-200/50 blur-3xl" />

      <div className="relative rounded-4xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur-xl sm:p-8">
        <div className="mb-6">
          <p className="text-sm font-semibold text-sky-700">Portal Login</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Secure Company Access
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Sign in with your company ID, staff email, and password.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Company ID
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-sky-400">
              <Building2 className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter company ID"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Staff Email
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-sky-400">
              <Mail className="h-4 w-4 text-slate-400" />
              <input
                type="email"
                placeholder="Enter staff email"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-sky-400">
              <LockKeyhole className="h-4 w-4 text-slate-400" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-sky-600 via-blue-700 to-pink-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Login to Dashboard
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
            <p className="text-xs font-medium text-slate-500">Validation</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              QR Protected
            </p>
          </div>

          <div className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4">
            <p className="text-xs font-medium text-slate-500">Access</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Admin / Staff
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}