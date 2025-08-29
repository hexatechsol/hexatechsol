import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import BrandsSection from "@/components/brands";
import SolutionAdvisor from "@/components/advisor";
import BlogSection from "@/components/blog";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BrandsSection />
        <SolutionAdvisor />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
