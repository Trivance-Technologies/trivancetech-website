'use client'
import IdealsCard from '@/components/ideals_card';
import InfoSection from '@/components/info_section';
import PartnersLogosDisplay from '@/components/partners_logos_display';
import { motion } from 'framer-motion';

const idealsDetails = [
    {
        "iconUrl": "/magnifying-glass.svg",
        "title": "Who We Are",
        "description": "Trivance Technologies was founded on the belief that every organization carries a unique potential worth honoring. We craft industry-specific solutions that not only meet regulatory demands but elevate purpose-driven goals. As an Odoo and Huawei partner, we are built for complexity and engineered for your growth."
    },
    {
        "iconUrl": "/bag.svg",
        "title": "Our Expertise",
        "description": "Our team excels in delivering end to end solutions, from documentation and design to development and implementation, across diverse industries. We have established expertise in ERP systems and a comprehensive suite of IT solutions. We champion customer focus, agile project management, and Time Management."
    },
    {
        "iconUrl": "/handshake.svg",
        "title": "Why Choose Us",
        "description": "Choosing Trivance Technologies means choosing a partner who truly understands your needs. With years of experience, top-tier products, and unwavering support, we’re here to make your vision a reality. Can you afford to trust anyone else?"
    },
];

const About = () => {
  return (
    <>
      <section className='w-full py-[3.75rem] overflow-hidden'>
        <div className='px-[1rem] 1sm:px-[1.5rem] w-full'>
            <div className='w-full max-w-[67.25rem] mx-auto flex flex-col items-center text-center'>
                <motion.div className='flex flex-col gap-[1.25rem] mb-[3.75rem]'                 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}  
                    style={{ willChange: "transform, opacity" }}
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
