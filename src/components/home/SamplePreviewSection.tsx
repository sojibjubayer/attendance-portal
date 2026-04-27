export default function SamplePreviewSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-violet-700">
              Live Dashboard Preview
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              A cleaner dashboard experience for daily attendance
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Give companies a premium, organized, and mobile-friendly
              attendance system with real-time actions, attendance history,
              company-wise controls, and payroll-ready reporting.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Real-time staff activity",
                "QR verified attendance",
                "Company-wise dashboard",
                "Monthly report overview",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/70 bg-white/90 p-5 shadow-2xl shadow-slate-200/70 backdrop-blur-xl sm:p-7">
            <div className="flex items-start justify-between gap-4 rounded-3xl bg-linear-to-r from-blue-50 via-violet-50 to-pink-50 p-4 sm:p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                  Today
                </p>
                <h3 className="mt-1 text-xl font-black text-slate-950 sm:text-2xl">
                  Attendance Overview
                </h3>
              </div>

              <div className="rounded-2xl bg-white px-3 py-2 text-right shadow-sm">
                <p className="text-[11px] font-semibold text-slate-500">
                  Status
                </p>
                <p className="text-sm font-black text-emerald-600">Active</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                ["Check In", "09:02 AM", "border-blue-100 bg-blue-50/70"],
                ["Lunch Out", "01:08 PM", "border-violet-100 bg-violet-50/70"],
                ["Lunch In", "01:58 PM", "border-pink-100 bg-pink-50/70"],
                ["Check Out", "06:11 PM", "border-slate-200 bg-slate-50/80"],
              ].map(([label, value, style]) => (
                <div
                  key={label}
                  className={`rounded-2xl border p-4 sm:p-5 ${style}`}
                >
                  <p className="text-xs font-semibold text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 text-base font-black text-slate-950 sm:text-lg">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Logged in staff
                  </p>
                  <p className="mt-1 text-sm font-black text-slate-950">
                    Adil Rahman
                  </p>
                </div>

                <div className="rounded-full bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 px-3 py-1 text-xs font-black text-white">
                  QR Verified
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <p className="text-xs font-semibold text-slate-500">
                Company Dashboard
              </p>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  ["Staff", "128"],
                  ["Present", "117"],
                  ["Reports", "Ready"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white p-3 text-center shadow-sm"
                  >
                    <p className="text-[11px] font-semibold text-slate-500">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-black text-slate-950">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}