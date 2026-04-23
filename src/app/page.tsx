import HeroSection from "@/components/home/HeroSection";
import LoginCard from "@/components/home/LoginCard";
import StatsStrip from "@/components/home/StatsStrip";
import SamplePreviewSection from "@/components/home/SamplePreviewSection";
import ServicesSection from "@/components/home/ServicesSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-sky-50/40 to-rose-50/40 text-slate-900">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <HeroSection />
        <LoginCard />
      </section>

      <StatsStrip />
      <SamplePreviewSection />
      <ServicesSection />
      <WorkflowSection />
      <CtaSection />
    </main>
  );
}