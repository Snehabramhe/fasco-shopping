import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import BrandStrip from "@/components/home/BrandStrip";
import ProductGrid from "@/components/home/ProductGrid";
import PromoBanner from "@/components/home/PromoBanner";
import Newsletter from "@/components/home/Newsletter";
import DealsSection from "@/components/home/DealsSection";
import NewArrivals from "@/components/home/NewArrivals";
import InstagramSection from "@/components/home/InstagramSection";
import TestimonialsWrapper from "@/components/home/TestimonialWrapper";
import CustomCarousel from "@/components/home/CustomCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DealsSection />
      <NewArrivals />
      <PromoBanner />
      <InstagramSection />
      <TestimonialsWrapper />
      <Newsletter />
      <Footer />
    </>
  );
}
