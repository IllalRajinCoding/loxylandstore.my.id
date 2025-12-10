"use client";
import Navbar from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import MainBanner from "@/components/MainBanner";
import WorkflowShowcase from "@/components/BenefitSection";
import ProductSection from "@/components/TopSale";

const Home = () => {
  return (
    // PERBAIKAN: Tambahkan 'w-full' dan 'overflow-x-hidden'
    <div className="min-h-screen w-full overflow-x-hidden bg-stone-950 text-stone-50">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 sm:py-24">
        <HeroSection />
        <section className="flex flex-col gap-8">
          {/* Product Grid with Modal */}
          <ProductSection />
        </section>
        <WorkflowShowcase />

        {/* --- SECTION KATALOG PRODUK --- */}

        <FeatureGrid />
        <MainBanner />
      </main>
    </div>
  );
};

export default Home;
