'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const PartnersLogosDisplay = () => {
  return (
    <section className="w-full py-[3.75rem] overflow-hidden">
        <div className="w-full px-[1rem] 1sm:px-[1.5rem] flex justify-center">
          <div className='flex flex-col w-full max-w-[67.25rem] items-center gap-[3rem]'>
            <motion.h2 className='opacity-[.6] uppercase text-primary text-[1rem]/[1.25rem] tracking-[2px]'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: 1,
                  ease: "easeInOut",
              }}
              viewport={{ once: true }}  
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
                <Image src='/logos/huawei.png' height={226} width={223} alt="logo of huawei" className='object-cover max-w-[154px]' />
                <Image src='/logos/odoo.png' height={196} width={621} alt="logo of odoo" className='object-cover max-w-[154px]' />
            </motion.div>
          </div>
        </div>
    </section>
  )
}

export default PartnersLogosDisplay
