import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-4xl bg-linear-to-r from-sky-700 via-blue-700 to-pink-600 p-8 text-white shadow-2xl sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Ready to Launch
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Build your premium QR attendance portal for companies
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Deliver company-based login, branded dashboards, secure QR
              attendance, and monthly reporting with a polished cloud platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                Login Now
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="features"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                View All Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}