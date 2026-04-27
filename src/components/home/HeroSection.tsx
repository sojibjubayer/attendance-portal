import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  QrCode,
  Building2,
  BarChart3,
  MapPin,
} from "lucide-react";

const features = [
  { icon: Building2, title: "Company Workspace", text: "Separate branded access for each company." },
  { icon: QrCode, title: "Smart QR Scan", text: "Fast check-in, break, and check-out flow." },
  { icon: MapPin, title: "Office Protection", text: "Optional IP/location-based attendance control." },
  { icon: BarChart3, title: "Live Reports", text: "Daily and monthly payroll-ready records." },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:py-20">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-pink-300/25 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-linear(to_right,rgba(59,130,246,0.07)_1px,transparent_1px),linear-linear(to_bottom,rgba(168,85,247,0.07)_1px,transparent_1px)] bg-size-[46px_46px]" />
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/85 to-white/30" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-pink-500" />
            Attendance, Reimagined
          </p>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
            Smart QR Attendance
            <span className="block bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
              Built for Growing Teams
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A modern attendance platform for companies that need secure QR
            verification, clean staff tracking, branded portals, and
            payroll-ready reports without messy manual records.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-violet-200/70 transition duration-500 hover:-translate-y-1"
            >
              Explore Platform
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-7 py-4 text-sm font-black text-slate-800 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              Request Demo
            </Link>
          </div>

          <div className="mt-8 flex max-w-xl items-start gap-3 rounded-2xl border border-violet-100 bg-white/75 px-4 py-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm backdrop-blur">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
            Designed for secure company access, verified QR attendance, and
            reliable staff records.
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-white/80 bg-white/80 p-5 shadow-xl shadow-blue-100/60 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 via-violet-600 to-pink-500 text-white shadow-lg shadow-violet-200">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}