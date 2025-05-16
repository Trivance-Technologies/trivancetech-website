import InfoSection from "@/components/info_section";
import KnowMoreCard from "@/components/know_more_card";
import PartnersLogosDisplay from "@/components/partners_logos_display";
import ServicesSection from "@/components/services_section";

const Products = () => {
  return (
    <>
      <ServicesSection
      title = "our products"
      subtitle="Explore Our Purpose-Built Solutions"
      description="Are you managing pensions or enterprise workflows? Find reliable systems to meet industry standards while staying agile and efficient."
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
