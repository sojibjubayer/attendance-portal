"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Fingerprint,
  LayoutDashboard,
  LockKeyhole,
  Palette,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  [
    "Super Admin Panel",
    "Manage all companies, admins, users, settings, and platform controls.",
    LockKeyhole,
  ],
  [
    "Company Registration System",
    "Register companies with profile, company admin, branding, and portal access.",
    Building2,
  ],
  [
    "Unique Company ID",
    "Give every company a unique ID for separated login and attendance data.",
    Fingerprint,
  ],
  [
    "Company-wise Login System",
    "Admins and staff log in using company ID, email, and password.",
    ShieldCheck,
  ],
  [
    "Separate Company Dashboard",
    "Each company gets its own dashboard, staff list, attendance records, and reports.",
    LayoutDashboard,
  ],
  [
    "Company Branding",
    "Add company logo, name, and brand colors for a branded portal experience.",
    Palette,
  ],
  [
    "Staff Management",
    "Create, update, activate, deactivate, and manage staff with role permissions.",
    Users,
  ],
  [
    "Attendance Marking Page",
    "Dedicated page for staff to mark attendance securely after validation.",
    QrCode,
  ],
  [
    "Check-in / Lunch / Checkout",
    "Track check-in, lunch out, lunch in, and checkout with timestamps.",
    Clock3,
  ],
  [
    "Date & Time Tracking",
    "Every attendance action is saved with accurate date and time records.",
    CalendarDays,
  ],
  [
    "Attendance History",
    "View previous attendance records with clean daily and monthly history.",
    CheckCircle2,
  ],
  [
    "Monthly Attendance Reports",
    "Generate organized reports for admin review, HR, and payroll preparation.",
    LayoutDashboard,
  ],
  [
    "Admin Access Control",
    "Control what admins can view, edit, approve, and manage.",
    BadgeCheck,
  ],
  [
    "Session Management",
    "Keep login sessions secure with protected dashboard access.",
    LockKeyhole,
  ],
  [
    "Mobile-friendly UI",
    "Responsive experience for mobile, tablet, laptop, and desktop.",
    Smartphone,
  ],
  [
    "Role-based Access",
    "Separate access levels for Super Admin, Company Admin, and Staff.",
    Users,
  ],
  [
    "Security Validation",
    "Protect attendance using QR validation, login checks, and access rules.",
    ShieldCheck,
  ],
  [
    "Payroll Support",
    "Use attendance and working-hour records for payroll calculation support.",
    WalletCards,
  ],
];

const stats = [
  ["Companies", "Multi-tenant"],
  ["Attendance", "QR Secure"],
  ["Reports", "Monthly"],
  ["Payroll", "Ready"],
];

export default function FeaturesClient() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <section className="relative px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:px-12">
        <div className="absolute inset-0 bg-[radial-linear(circle_at_15%_10%,#2563EB18,transparent_32%),radial-linear(circle_at_85%_12%,#7C3AED18,transparent_32%),radial-linear(circle_at_50%_90%,#EC489914,transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-violet-700 shadow-sm backdrop-blur">
              <Zap size={14} className="text-pink-500" />
              New Era of Attendance
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Premium QR Attendance Platform
              <span className="block bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                for Modern Companies
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A brighter, cleaner cloud attendance system with company-wise
              login, QR validation, branded dashboards, staff management,
              monthly reports, security validation, and payroll support.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {[
                "Company ID",
                "QR Secure",
                "Admin / Staff",
                "Payroll Ready",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-center text-sm font-bold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 px-7 py-4 font-black text-white shadow-xl shadow-violet-200 transition duration-500 hover:-translate-y-1"
              >
                Access Portal
                <ArrowRight size={18} />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-black text-slate-800 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                View Features
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[2.5rem] bg-linear-to-r from-blue-300 via-violet-300 to-pink-300 opacity-70 blur-2xl" />

            <div className="relative rounded-[2.5rem] border border-white bg-white/80 p-4 shadow-2xl shadow-slate-200/80 backdrop-blur-xl">
              <div className="rounded-4xl border border-slate-100 bg-white p-5 sm:p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-pink-500">
                      Company Dashboard
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-slate-950">
                      Attendance Overview
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-3">
                    <QrCode className="text-violet-600" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {stats.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <p className="text-xs font-semibold text-slate-500">
                        {label}
                      </p>
                      <p className="mt-1 text-xl font-black text-slate-950">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["Check In", "09:02 AM"],
                    ["Lunch Out", "01:08 PM"],
                    ["Lunch In", "01:58 PM"],
                    ["Check Out", "06:11 PM"],
                  ].map(([label, time]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="text-sm font-semibold text-slate-500">
                        {label}
                      </span>
                      <span className="font-black text-slate-950">{time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-violet-100 bg-linear-to-r from-blue-50 via-violet-50 to-pink-50 p-4">
                  <p className="text-sm font-black text-violet-700">
                    Security Validation Active
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Company login, QR validation, role access, and session
                    protection enabled.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="features"
        className="relative px-4 pb-20 sm:px-6 md:px-10 lg:px-12"
      >
        <div className="mx-auto mb-12 max-w-7xl">
          <p className="font-black uppercase tracking-[0.22em] text-pink-500">
            Complete Features
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
            Everything companies need to manage staff attendance professionally
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600">
            A complete system for company onboarding, staff access, QR
            validation, attendance tracking, admin control, reporting, and
            payroll support.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, desc, Icon], index) => (
            <motion.article
              key={title as string}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: Math.min(index * 0.025, 0.2),
              }}
              className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100"
            >
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-linear-to-br from-blue-100 via-violet-100 to-pink-100 blur-2xl transition duration-700 group-hover:scale-125" />

              <div className="relative mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br from-blue-50 via-violet-50 to-pink-50 p-3 ring-1 ring-slate-100">
                <Icon className="h-6 w-6 text-violet-600" />
              </div>

              <h3 className="relative text-lg font-black text-slate-950 sm:text-xl">
                {title}
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-slate-600">
                {desc}
              </p>

              <div className="relative mt-6 h-1 w-14 rounded-full bg-linear-to-r from-blue-500 via-violet-500 to-pink-500 transition-all duration-500 group-hover:w-24" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative px-4 pb-16 sm:px-6 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 p-px shadow-2xl shadow-violet-200"
        >
          <div className="relative rounded-[2.5rem] bg-white p-7 sm:p-10 md:p-14">
            <div className="absolute inset-0 bg-[radial-linear(circle_at_top_left,#2563EB12,transparent_35%),radial-linear(circle_at_bottom_right,#EC489914,transparent_35%)]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_0.5fr]">
              <div>
                <p className="font-black uppercase tracking-[0.22em] text-violet-600">
                  New Era of Attendance
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                  Launch a premium QR attendance portal for companies
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  Give every company a branded dashboard, secure login, QR-based
                  attendance flow, role access, reports, and payroll-ready
                  attendance data.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 px-8 py-5 font-black text-white shadow-xl shadow-pink-200 transition duration-500 hover:-translate-y-1 sm:w-auto"
              >
                Request Demo
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center">
        <p className="text-sm font-bold tracking-wide text-slate-500">
          Powered by{" "}
          <span className="bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text font-black text-transparent">
            Samira Cloud Technology
          </span>
        </p>
      </footer>
    </main>
  );
}
