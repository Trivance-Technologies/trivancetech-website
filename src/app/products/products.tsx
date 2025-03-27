import InfoSection from "@/components/info_section";
import KnowMoreCard from "@/components/know_more_card";
import PartnersLogosDisplay from "@/components/partners_logos_display";
import ServicesSection from "@/components/services_section";

const Products = () => {
  return (
    <>
      <ServicesSection
      title = "our products"
      subtitle="Explore our range of innovative products"
      description="Find reliable and effective products designed to improve your business operations. From essential tools to advanced systems, we've got you covered."
      showAllServices={false}
      isProducts={true}
      isHomePage={false}
      />
      <KnowMoreCard text={'Need A Solution That Actually Works For You? Contact Us Today'} />
      <InfoSection swapRow={true} showButton={true} />
      <PartnersLogosDisplay />
    </>
  )
}

export default Products
