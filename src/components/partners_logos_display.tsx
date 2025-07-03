'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAppData } from '@/context/appDataContext';

const PartnersLogosDisplay = () => {
  const {isLogosLoading, logos} = useAppData();

  return (
    <section className={`w-full ${(!isLogosLoading || logos.length > 0) ? 'py-[3.75rem]' : 'pb-[6rem] 1sm:pb-[7.5rem]'} overflow-hidden`}>
        <div className="w-full px-[1rem] 1sm:px-[1.5rem] flex justify-center">
          <div className='flex flex-col w-full max-w-[67.25rem] items-center gap-[3rem]'>
            <motion.h2 className='opacity-[.6] uppercase text-primary text-[.875rem]/[1.25rem] 3sm:text-[1rem]/[1.25rem] tracking-[2px]'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: 1,
                  ease: "easeInOut",
              }}
              viewport={{ once: true }}  
              style={{ willChange: "transform, opacity" }}   
            >Our Partners</motion.h2>
            <motion.div className="w-full flex flex-col 3sm:flex-row gap-[4rem] justify-center items-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: .5
              }}
              viewport={{ once: true }}  
              style={{ willChange: "transform, opacity" }}
            >
                <Image src='/logos/odoo.png' height={294} width={932} alt="logo of odoo" className='object-cover max-w-[154px]' />
            </motion.div>
          </div>
        </div>
    </section>
  )
}

export default PartnersLogosDisplay
