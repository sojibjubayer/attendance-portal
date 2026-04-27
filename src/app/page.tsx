import HeroSection from "@/components/home/HeroSection";
import SamplePreviewSection from "@/components/home/SamplePreviewSection";
import ServicesSection from "@/components/home/ServicesSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-sky-50/40 to-rose-50/40 text-slate-900">

        <HeroSection />

      <SamplePreviewSection />
      <ServicesSection />
      <WorkflowSection />
      <CtaSection />
    </main>
  );
}