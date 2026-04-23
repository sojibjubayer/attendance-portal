import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left Side */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-sky-600 via-blue-600 to-pink-500 shadow-md">
            <span className="text-lg font-black text-white">P</span>
          </div>

          <div>
            <h1 className="text-lg font-black tracking-tight text-slate-900 sm:text-xl">
              Portal
            </h1>
            <p className="text-xs font-medium text-slate-500">
              QR Attendance System
            </p>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-sky-600 via-blue-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:opacity-90"
          >
            Staff Login
          </Link>
        </div>
      </div>
    </header>
  );
}