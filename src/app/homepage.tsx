'use client'
import ClientsLogoDisplay from "@/components/clients_logo_display";
import InfoSection from "@/components/info_section";
import PartnersLogosDisplay from "@/components/partners_logos_display";
import ServicesSection from "@/components/services_section";

export default function Home() {

  return (
    <>
      <ServicesSection
      isHomePage={true}
      title = "our services"
      subtitle = "Our Services Deliver, Our Solutions Work"
      description = "Let's boost your business. Our tailored services provide expert support—from planning to growth and beyond."
      showAllServices={true}
      isProducts={false}
       />
      <InfoSection
      swapRow={false}
      showButton={true}
       />
      <ServicesSection
      isHomePage={true}
      title = "our products"
      subtitle="Explore the innovation in our products"
      description="We're locked in with you. From reliable, effective and tailored products to improve your operations to essential tools and advanced systems — we support your goals."
      showAllServices={true}
      isProducts={true}
      />
      <ClientsLogoDisplay />
      <PartnersLogosDisplay />
    </>
  );
}
