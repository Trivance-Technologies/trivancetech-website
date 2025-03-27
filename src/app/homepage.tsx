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
      subtitle = "What services do we offer for your business"
      description = "See how our tailored services can boost your business. From planning to support, we provide the expertise to drive your success."
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
      subtitle="Explore our range of innovative products"
      description="Find reliable and effective products designed to improve your business operations. From essential tools to advanced systems, we've got you covered."
      showAllServices={true}
      isProducts={true}
      />
      <ClientsLogoDisplay />
      <PartnersLogosDisplay />
    </>
  );
}
