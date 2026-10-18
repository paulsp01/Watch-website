import PageContainer from "../components/PageContainer.jsx";
import HeroSection from "../components/Atelier/Hero";
import HeritageSection from "../components/Atelier/Maison";
import CollectionSection from "../components/Atelier/CollectionSection";
import ServicesSection from "../components/Atelier/ServicesSection";
import TestimonialSection from "../components/Atelier/TestimonialSection";
import PrivateAudienceSection from "../components/Atelier/PrivateAudienceSection";

const Atelier = () => {
  return (
    <PageContainer className="overflow-hidden bg-[#0d0d0e] text-[#eee9df]">
      <HeroSection />

      <HeritageSection />

      <CollectionSection />

      <ServicesSection />

      <TestimonialSection />

      <PrivateAudienceSection />
    </PageContainer>
  );
};

export default Atelier;