import InfoSection from '@/components/info_section';
import KnowMoreCard from '@/components/know_more_card';
import PartnersLogosDisplay from '@/components/partners_logos_display';
import ServicesSection from '@/components/services_section';

const Services = () => {
  return (
    <>
      <ServicesSection
      title = "our services"
      subtitle = "Explore the services we offer to support your business"
      description = "See how our tailored services can boost your business. From planning to support, we provide the expertise to drive your success."
      showAllServices={false}
      isProducts={false}
      isHomePage={false}
       />
      <KnowMoreCard text={'Want to know more? Contact with our consultant'} />
      <InfoSection 
      swapRow={true}
      showButton={true}
      />
      <PartnersLogosDisplay />
    </>
  )
}

export default Services
