'use client'
import IdealsCard from '@/components/ideals_card';
import InfoSection from '@/components/info_section';
import PartnersLogosDisplay from '@/components/partners_logos_display';
import { motion } from 'framer-motion';

const idealsDetails = [
    {
        "iconUrl": "/magnifying-glass.svg",
        "title": "Who We Are",
        "description": "Trivance Technologies is a leading provider of industry specific solutions to organizations to help them maximize their potential, meet their regulatory requirements and organizational goals. Trivance is also an Odoo Partner and Huawei Partner."
    },
    {
        "iconUrl": "/bag.svg",
        "title": "Our Expertise",
        "description": "Our team possesses appreciable experience in documenting, designing, developing and implementing solutions across various industries. We have proven capabilities in ERP implementations and a diverse range of IT solutions development from design and development through to strategic advice and professional services."
    },
    {
        "iconUrl": "/handshake.svg",
        "title": "Why Choose Us",
        "description": "With extensive experience, superior products, and unwavering professionalism, Trivance Technologies is committed to delivering exceptional solutions backed by reliable support."
    },
];

const About = () => {
  return (
    <>
      <section className='w-full py-[3.75rem]'>
        <div className='px-[1rem] 1sm:px-[1.5rem] w-full'>
            <div className='w-full max-w-[67.25rem] mx-auto flex flex-col items-center text-center'>
                <motion.div className='flex flex-col gap-[1.25rem] mb-[3.75rem]'                 
                    initial={{ y: '10%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}  
                >
                    <h2 className='tracking-[2px] uppercase font-medium text-[1rem]/[1.25rem] opacity-[.6] text-primary'>Consulting</h2>
                    <h3 className='tracking-[-1px] text-[2.5rem]/[3rem] font-semibold text-primary'>Empowering your business to expand and thrive</h3>
                </motion.div>
                <div className='flex gap-[1.25rem] 2sm:gap-[2rem] 1sm:gap-[3.75rem] 2sm:flex-row flex-col'>
                    {
                        idealsDetails.map((details, index) => (
                            <IdealsCard 
                            key={index} 
                            iconUrl = {details.iconUrl}
                            title = {details.title}
                            description = {details.description}
                            index={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
      </section>
      <InfoSection swapRow={false} showButton={true} />
      <PartnersLogosDisplay />
    </>
  )
}

export default About
