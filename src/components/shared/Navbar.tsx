"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, QrCode } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050505]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        
        {/* Left Side: Branding with QR Subtitle */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Logo"
              width={28}
              height={28}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg font-extrabold leading-none tracking-tight">
              <span className="bg-linear-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Samira Cloud
              </span>
            </h1>
            <div className="mt-0.5 flex items-center gap-1">
              <QrCode size={10} className="text-violet-400" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                QR Attendance System
              </p>
            </div>
          </div>
        </Link>

        {/* Right Side: Slim Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/features"
            className="hidden text-xs font-semibold text-slate-300 transition hover:text-pink-400 md:block"
          >
            Features
          </Link>

          <Link
            href="/login"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-blue-600 via-violet-600 to-pink-500 px-4 py-2 text-xs font-bold text-white transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <Sparkles size={14} className="transition-transform group-hover:rotate-12" />
            <span>Staff Login</span>
            {/* Subtle gloss overlay effect */}
            <span className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </header>
  );
}