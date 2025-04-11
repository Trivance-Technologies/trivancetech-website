import InfoSection from '@/components/info_section';
import KnowMoreCard from '@/components/know_more_card';
import PartnersLogosDisplay from '@/components/partners_logos_display';
import ServicesSection from '@/components/services_section';

const Services = () => {
  return (
    <>
      <ServicesSection
      title = "our services"
      subtitle = "Explore our services built for your growth"
      description = "We build around you—because your business deserves more than a template."
      showAllServices={false}
      isProducts={false}
      isHomePage={false}
       />
      <KnowMoreCard text={'Curious to know more? Contact our consultant'} />
      <InfoSection 
      swapRow={true}
      showButton={true}
      />
      <PartnersLogosDisplay />
    </>
  )
}

export default Services
