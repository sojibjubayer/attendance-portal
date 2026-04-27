"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, QrCode } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2 sm:px-6">
        {/* Brand */}
        <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 sm:h-10 sm:w-10">
            <Image
              src="/logo.png"
              alt="Samira Cloud Logo"
              width={28}
              height={28}
              priority
              className="h-7 w-7 object-contain"
            />
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-sm font-extrabold leading-none tracking-tight sm:text-lg">
              <span className="bg-linear-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Samira Cloud
              </span>
            </h1>

            <div className="mt-0.5 hidden items-center gap-1 xs:flex sm:flex">
              <QrCode size={10} className="shrink-0 text-violet-400" />
              <p className="truncate text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                QR Attendance System
              </p>
            </div>
          </div>
        </Link>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Link
            href="/features"
            className="hidden text-xs font-semibold text-slate-300 transition hover:text-pink-400 md:block"
          >
            Features
          </Link>

          <Link
            href="/login"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 px-3 py-2 text-[11px] font-bold text-white transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] sm:gap-2 sm:px-4 sm:text-xs"
          >
            <Sparkles size={13} className="shrink-0 transition-transform group-hover:rotate-12 sm:size-3.5" />
            <span className="whitespace-nowrap">Staff Login</span>
            <span className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </header>
  );
}