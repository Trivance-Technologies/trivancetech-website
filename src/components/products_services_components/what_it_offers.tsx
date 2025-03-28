'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface WhatItOffersTypes {
    title: string;
    isProduct: boolean;
    content: {
        title: string;
        details: string;
    }[];
}

const WhatItOffers: React.FC<WhatItOffersTypes> = ({ title, content, isProduct }) => {
    return (
        <section className='w-full py-[3.75rem] overflow-hidden'>
            <div className='w-full px-[1rem] 3sm:px-[1.25rem] 2sm:px-[1rem] 1sm:px-[1.25rem]'>
                <div className='w-full max-w-[67.25rem] mx-auto flex flex-col 3sm:flex-row gap-[2rem] 3sm:gap-[3rem] 1sm:gap-[8.75rem]'>
                    <motion.div className='w-full relative'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                        style={{ willChange: "transform, opacity" }}
                    >
                        <Image width={1280} height={853} src='/images/image4.webp' alt='image of three black people sitting in a straight line, holding hands and talking to another black woman.' className='object-cover'/>
                    </motion.div>
                    <div className="flex flex-col w-full text-left">
                        <motion.h2
                            className="tracking-[2px] opacity-[.6] uppercase font-medium text-[.875rem]/[1.25rem] 3sm:text-[1rem]/[1.25rem]"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.7,
                            }}
                            viewport={{ once: true }}
                        >
                            {title}
                        </motion.h2>

                        <motion.h3
                            className="pb-[1.5rem] pt-[.5rem] text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold text-primary"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.9,
                            }}
                            viewport={{ once: true }}
                        >
                            {`${(isProduct) ? 'What It Offers' : 'What You Get'}`}
                        </motion.h3>

                        <div className="w-full flex flex-col">
                            {content?.map((data, index) => (
                                <motion.div
                                    className="flex flex-col w-full gap-[1.25rem] mb-[1rem]"
                                    key={index}
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 1.1 + index * 0.2,
                                    }}
                                    viewport={{ once: true }}
                                    style={{ willChange: "transform, opacity" }}
                                >
                                    <h4 className="text-[1.125rem]/[1.5rem] 2sm:text-[1.25rem]/[1.5rem] font-semibold text-primary">
                                        {`${data.title}:`}
                                    </h4>
                                    <p className="opacity-[.6] text-[1rem]/[1.25rem] text-primary">
                                        {`${data.details}`}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatItOffers
