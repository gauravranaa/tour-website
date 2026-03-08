import Navbar from "@/components/Navbar";
import PopupModal from "@/components/PopupModal";
import Hero from "@/components/Hero";
import Expeditions from "@/components/Expeditions";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import GallerySection from "@/components/GallerySection";
export default function Home() {
  return (
    <div>
      <PopupModal />
      <Navbar />
      <Hero />
      <Expeditions />
      <WhyChooseUs />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}