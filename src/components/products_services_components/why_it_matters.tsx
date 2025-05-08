'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface WhyItMattersTypes {
    title: string;
    description: string;
}

const WhyItMatters: React.FC<WhyItMattersTypes> = ({ title, description }) => {
    return (
        <section className='w-full py-[3rem] 3rem:py-[4rem] 2rem:py-[6rem] 1sm:py-[7.5rem] bg-secondary overflow-hidden'>
            <div className='px-[1rem] 3sm:px-[1.25rem] 2sm:px-[1rem] 1sm:px-[1.25rem] w-full flex items-center justify-center'>
                <div className='flex flex-col-reverse 3sm:flex-row gap-[2rem] 2sm:gap-[3rem] 1sm:gap-[8.75rem] max-w-[62.75rem] w-full items-center'>
                    <motion.div className='w-full flex flex-col max-w-[32.88rem] text-left 3sm:text-right items-start 3sm:items-end'
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                        duration: 1,
                        ease: "easeInOut",
                        opacity: { duration: 0.5, delay: 0.5 },
                        }}
                        viewport={{ once: true }}
                        style={{ willChange: "transform, opacity" }}
                    >
                        <h2 className='tracking-[2px] text-primary opacity-[.6] uppercase font-medium text-[.875rem]/[1.25rem] 3sm:text-[1rem]/[1.25rem]'>{title}</h2>
                        <h3 className='mt-[0.75rem] 2sm:mt-[1.25rem] mb-[1.25rem] 2sm:mb-[2.5rem] text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold text-primary'>Why It Matters</h3>
                        <p className='text-primary text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] opacity-[.6]'>{description}</p>
                    </motion.div>
                    <motion.div className='w-full'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            opacity: { duration: 0.5, delay: 0.5 },
                        }}
                        viewport={{ once: true }}
                        style={{ willChange: "transform, opacity" }}
                    >
                        <Image src='/images/image5.webp' height={1800} width={1012} alt='image of a black guy holding a newspaper.' className='object-cover'/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhyItMatters
