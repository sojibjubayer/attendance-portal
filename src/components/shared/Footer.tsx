import Link from "next/link";
import { Mail, ShieldCheck, QrCode, Clock3 } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Staff Login", href: "/login" },
  { label: "Features", href: "/#features" },
];

const highlights = [
  {
    icon: QrCode,
    text: "QR attendance flow",
  },
  {
    icon: Clock3,
    text: "Daily staff tracking",
  },
  {
    icon: ShieldCheck,
    text: "Secure portal access",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/60 bg-linear-to-b from-white to-slate-50/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-sky-600 via-blue-600 to-pink-500 shadow-md shadow-sky-100">
                <span className="text-base font-black text-white">P</span>
              </div>

              <div>
                <h2 className="text-lg font-black tracking-tight text-slate-900">
                  Portal
                </h2>
                <p className="text-sm text-slate-500">
                  QR Attendance System
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              A cleaner and more professional attendance portal for secure staff
              login, QR validation, check-in, lunch tracking, and checkout
              management.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-sky-700" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
              Quick Links
            </h3>

            <div className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-500 transition hover:text-sky-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact / Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">
              Support
            </h3>

            <div className="mt-4 rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-sky-100 via-white to-pink-100">
                  <Mail className="h-5 w-5 text-sky-700" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Need access assistance?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    For account setup, password reset, or attendance access,
                    please contact your company administrator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Portal Attendance System. All rights reserved.</p>
          <p className="font-medium text-slate-600">
            Secure • Clean • Professional
          </p>
        </div>
      </div>
    </footer>
  );
}