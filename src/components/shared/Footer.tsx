import Link from "next/link";
import {
  Mail,
  ShieldCheck,
  QrCode,
  Clock3,
  Building2,
  ArrowRight,
} from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Request Demo", href: "/contact" },
  { label: "About Platform", href: "/about" },
];

const highlights = [
  {
    icon: QrCode,
    text: "Smart QR Verification",
  },
  {
    icon: Clock3,
    text: "Daily Attendance Tracking",
  },
  {
    icon: ShieldCheck,
    text: "Protected Company Access",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/60 bg-linear-to-b from-white via-white to-slate-50/90">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 via-violet-600 to-pink-500 shadow-lg shadow-violet-200/60">
                <span className="text-lg font-black text-white">P</span>
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950">
                  Portal
                </h2>
                <p className="text-sm font-medium text-slate-500">
                  Premium QR Attendance System
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              A modern attendance platform for companies that need secure QR
              verification, clean staff tracking, branded portals, and
              payroll-ready reporting without messy manual records.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
                  >
                    <Icon className="h-4 w-4 text-violet-600" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-950">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-violet-700"
                >
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-950">
              Support
            </h3>

            <div className="mt-5 rounded-[1.75rem] border border-white/80 bg-white/90 p-5 shadow-xl shadow-slate-100 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50">
                  <Mail className="h-5 w-5 text-violet-700" />
                </div>

                <div>
                  <p className="text-sm font-black text-slate-950">
                    Need assistance?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    For account setup, QR access, attendance issues, or
                    reporting support, please contact your company
                    administrator.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-violet-100 bg-linear-to-r from-blue-50 via-violet-50 to-pink-50 p-4">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-violet-600" />
                  <p className="text-sm font-semibold text-slate-700">
                    Company-wise secure workspace access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Portal Attendance System. All rights reserved.</p>

          <p className="font-semibold text-slate-700">
            Secure • Smart • Premium
          </p>
        </div>
      </div>
    </footer>
  );
}