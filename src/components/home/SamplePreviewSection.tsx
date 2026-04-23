export default function SamplePreviewSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Sample Interface
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              A cleaner dashboard experience for daily attendance
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Show your users a premium, organized, and mobile-friendly
              attendance system with real-time actions, history, and company-wise
              controls.
            </p>
          </div>

          <div className="rounded-4xl border border-white/70 bg-white/90 p-5 shadow-2xl shadow-slate-200/50 backdrop-blur-xl sm:p-7">
            <div className="flex items-start justify-between gap-4 rounded-2xl bg-linear-to-r from-sky-50 via-white to-rose-50 p-4 sm:p-5">
              <div>
                <p className="text-xs font-medium text-slate-500">Today</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                  Attendance Overview
                </h3>
              </div>

              <div className="rounded-2xl bg-white px-3 py-2 text-right shadow-sm">
                <p className="text-[11px] font-medium text-slate-500">Status</p>
                <p className="text-sm font-semibold text-emerald-600">Active</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4 sm:p-5">
                <p className="text-xs font-medium text-slate-500">Check In</p>
                <p className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
                  09:02 AM
                </p>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-4 sm:p-5">
                <p className="text-xs font-medium text-slate-500">Lunch Out</p>
                <p className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
                  01:08 PM
                </p>
              </div>

              <div className="rounded-2xl border border-pink-100 bg-pink-50/70 p-4 sm:p-5">
                <p className="text-xs font-medium text-slate-500">Lunch In</p>
                <p className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
                  01:58 PM
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5">
                <p className="text-xs font-medium text-slate-500">Check Out</p>
                <p className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
                  06:11 PM
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Logged in staff
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    Adil Rahman
                  </p>
                </div>

                <div className="rounded-full bg-linear-to-r from-sky-600 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
                  QR Verified
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <p className="text-xs font-medium text-slate-500">
                Company Dashboard
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                  <p className="text-[11px] text-slate-500">Staff</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">128</p>
                </div>
                <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                  <p className="text-[11px] text-slate-500">Present</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">117</p>
                </div>
                <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                  <p className="text-[11px] text-slate-500">Reports</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}