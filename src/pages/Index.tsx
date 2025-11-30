import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FunctionalitySection from "@/components/FunctionalitySection";
import UserStorySection from "@/components/UserStorySection";
import AnalysisSection from "@/components/AnalysisSection";
import WireframeSection from "@/components/WireframeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <FunctionalitySection />
        <UserStorySection />
        <AnalysisSection />
        <WireframeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
