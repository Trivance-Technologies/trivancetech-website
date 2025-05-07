'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface InfoSectionDetails {
    swapRow : boolean,
    showButton: boolean
}

const InfoSection : React.FC<InfoSectionDetails> = ({ swapRow, showButton }) => {
  return (
    <section className={`w-full py-[6rem] 1sm:py-[7.5rem] ${(swapRow) ? 'bg-secondary' : 'bg-primary'} relative overflow-hidden`}>
        <div className="w-full px-[1rem] 1sm:px-[1.5rem]">
            <motion.div  className="w-full max-w-[67.25rem] mx-auto relative"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                viewport={{ once: true }}  
                style={{ willChange: "transform, opacity" }}
            >
                <div className='absolute bg-glow opacity-[.3] rounded-[50%] w-[11.6875rem] 2sm:w-[15.6875rem] h-[34.0625rem] 2sm:h-[45.6875rem] z-0 rotate-3d blur-[180px] 2sm:blur-[140px] top-[50%] left-auto right-[90px] 2sm:top-0 2sm:left-0 2sm:right-0'></div>
                <div className={`flex ${(swapRow) ? 'flex-col 2sm:flex-row-reverse' : 'flex-col-reverse 2sm:flex-row'} gap-[1.25rem] 3sm:gap-[3rem] 2sm:gap-[2.5rem] 1sm:gap-[4rem] items-start 2sm:items-center justify-between`}>
                    <div className="flex flex-col gap-[1.5rem] max-w-[33.1875rem] z-[1]">
                        <div className="flex flex-col gap-[1.25rem]">
                            <h2 className={`${(swapRow) ? 'text-primary' : 'text-brand'} ${(swapRow) ? 'opacity-[.6]' : 'opacity-[1]'} tracking-[2px] font-medium text-[1rem]/[1.25rem] uppercase`}>CONSULTANCY</h2>
                            <h3 className={`${(swapRow) ? 'text-primary' : 'text-white'} trackin-[-1px] text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold`}>Software Development, Implementation & Support</h3>
                        </div>
                        <p className={`${(swapRow) ? 'text-primary' : 'text-white'} opacity-[.6] text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] font-normal`}>Dream in detail, we will actualize it with our advanced technologies.</p>
                        <Link href='/contact' className={`${(showButton) ? 'block' : 'hidden'} transition-[background-color,color] duration-[400ms] border-[2px] hover:bg-transparent py-[.625rem] 2sm:py-[.875rem] px-[1.25rem] 2sm:px-[1.875rem] text-[.875rem]/[1.25rem] 3sm:text-[1.125rem]/[1.375rem] my-auto text-black hover:text-brand bg-brand border-brand font-semibold w-fit`}>
                            Get In Touch
                        </Link>
                    </div>
                    <Image src='/images/image2.webp' width={1800} height={1200} alt="image of lines of code on a laptop screen." className="object-cover max-h-[26rem] 2sm:max-w-[26rem]"/>
                </div>
            </motion.div >
        </div>
    </section>
  )
}

export default InfoSection
