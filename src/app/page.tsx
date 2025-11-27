"use client";

import Navbar from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import KeyMetrics from "@/components/KeyMetrics";
import FeatureGrid from "@/components/FeatureGrid";
import MainBanner from "@/components/MainBanner";
import PartnerStrip from "@/components/PartnerStrip";
import WorkflowShowcase from "@/components/WorkflowShowcase";

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-50">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:py-24 ">
        <HeroSection />
        <PartnerStrip />
        <KeyMetrics />
        <WorkflowShowcase />
        <FeatureGrid />
        <MainBanner />
      </main>
    </div>
  );
};

export default Home;
