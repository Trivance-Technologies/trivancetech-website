'use client'
import { useNotFoundPageContext } from '@/context/notFoundPageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

interface bodyHeaderTypes {
    imageUrl: string;
    imageHeight: number;
    imageWidth: number;
    title: string;
    subtitle: string;
    description: string;
    imageAlt: string
}

const BodyHeader: React.FC<bodyHeaderTypes> = ({ imageUrl, imageHeight, imageWidth, title, subtitle, description, imageAlt }) => {
    const MotionImage = motion.create(Image);
    const { toggleIs404 } = useNotFoundPageContext();

    useEffect(() => {
        toggleIs404(false);
    }, [toggleIs404]);

    return (
        <section className='relative bg-primary pt-[6rem] 1sm:pt-[11.25rem] pb-[2rem] 1sm:pb-[3.75rem] w-full overflow-hidden'>
            {/* Blue Blur - Top Left */}
            <div className="absolute top-[-15%] left-[-10%] w-[min(40vw,400px)] h-[min(100vh,1000px)] bg-glow opacity-30 rounded-full blur-[150px] rotate-[-27.4933deg]" />
            {/* Blue Blur - Bottom Right */}
            <div className="absolute bottom-[-15%] right-[-10%] w-[min(40vw,400px)] h-[min(100vh,1000px)] bg-glow opacity-30 rounded-full blur-[150px]" />
            {/* Large Central Blur */}
            <div className="absolute bottom-[-10%] left-[50%] translate-x-[-50%] w-[min(70vw,800px)] h-[min(70vw,800px)] bg-glow opacity-30 rounded-full blur-[200px] rotate-[10deg]"/>

            <div className='px-0 1sm:px-[1.25rem] w-full z-10 relative'>
                <div className='mx-auto w-full max-w-[67.25rem]'>
                    <div className='flex flex-col-reverse 1sm:flex-row gap-[1rem] 3sm:gap-[2rem] 1sm:gap-[3.75rem] items-center w-full'>
                        <motion.div className='flex flex-col 1sm:max-w-[29.625rem] gap-[1.25rem] w-full px-[1rem] 1sm-px-0'
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
                            <div className='w-full flex flex-col gap-[1.25rem] text-left items-start'>
                                <div className='breadcrumbs flex flex-row w-full items-center'>
                                    <Link 
                                        href="/services" 
                                        className="uppercase text-white text-[1rem]/[1.25rem] font-medium tracking-[2px]"
                                    >
                                        {title} &gt;
                                    </Link>
                                    <span className='text-brand text-[1rem]/[1.25rem] trackin-[2px] uppercase font-medium ml-[4px]'>{subtitle}</span>
                                </div>
                                <h1 className='text-[2rem]/[2.625rem] 2sm:text-[3rem]/[3.75rem] font-semibold text-white tracking-[-1px] capitalize'>{subtitle}</h1>
                                <p className='text-white text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] font-normal opacity-[.6]'>{description}</p>
                            </div>
                        </motion.div>
                        <MotionImage
                            src = {imageUrl}
                            alt = {imageAlt}
                            height={imageHeight}
                            width={imageWidth}
                            className="object-cover w-full max-h-[33.92rem] 1sm:max-h-[22.23rem]"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                              duration: 1,
                              ease: "easeInOut",
                              opacity: { duration: 0.5, delay: 0.5 },
                            }}
                            viewport={{ once: true }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BodyHeader
