import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <p className="inline-flex rounded-full border border-sky-100 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 shadow-sm backdrop-blur">
        Premium QR Attendance Platform
      </p>

      <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Smart QR Attendance
        <span className="mt-2 block bg-linear-to-r from-sky-700 via-blue-700 to-pink-600 bg-clip-text text-transparent">
          for modern companies
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        Company-based login, secure QR validation, branded dashboards, and full
        attendance tracking in one premium cloud portal.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "Company-wise Login",
          "QR Validation",
          "Role-based Access",
          "Mobile Friendly",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/70 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/login"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-sky-600 via-blue-700 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-sky-200/50 transition hover:-translate-y-0.5"
        >
          Access Company Portal
          <ArrowRight className="h-4 w-4" />
        </Link>

        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          Explore Features
        </a>
      </div>

      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 text-sm text-emerald-700 shadow-sm">
        <ShieldCheck className="h-4 w-4" />
        Secure login, QR-based verification, and optional IP restriction support
      </div>
    </div>
  );
}