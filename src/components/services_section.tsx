'use client'
import { productsData } from '@/data/productsData';
import { mainServicesData, servicesData } from '@/data/servicesData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import ServicesCard from './services_card';

interface servicesPropTypes {
    title : string,
    subtitle : string,
    description : string,
    showAllServices : boolean,
    isProducts: boolean,
    isHomePage: boolean,
}

const ServicesSection : React.FC<servicesPropTypes> = ({ title, subtitle, description, showAllServices, isProducts, isHomePage }) => {
    const data = isProducts ? productsData : (isHomePage) ? mainServicesData : servicesData;

    return (
        <section className={`w-full ${isProducts ? 'bg-white' : 'bg-secondary'} py-[6rem] 1sm:py-[7.5rem] px-[1rem] 1sm:px-[1.5rem]`}>
            <div className="w-full flex flex-col mx-auto max-w-[67.25rem] gap-[2.5rem]">
                <motion.div className="w-full flex flex-col gap-[1.25rem] text-left"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}  
                    style={{ willChange: "transform, opacity" }}
                >
                    <h2 className="uppercase tracking-[2px] font-medium text-[.875rem]/[1.25rem] 3sm:text-[1rem]/[1.25rem] opacity-[.6] text-primary">{title}</h2>
                    <div className="flex flex-col 1sm:flex-row justify-between w-full gap-[1rem] 1sm:gap-[6.25rem]">
                        <h3 className="text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold trackin-[-1px] text-primary">{subtitle}</h3>
                        <div className="flex flex-col max-w-[28rem] gap-[1rem]">
                            <p className='opacity-[.6] text-primary text-[1rem]/[1.25rem]'>{description}</p>
                            <Link 
                                href="/products" 
                                className={`${(showAllServices && isProducts) ? "block" : "hidden"} underline text-[.875rem]/[1.25rem] 3sm:text-[1rem]/[1.25rem] font-semibold text-primary hover:text-brand transition-colors duration-[300ms]`}
                            >
                                All products
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="grid 1sm:gap-[2.5rem] gap-[1.25rem] grid-cols-1 2sm:grid-cols-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: .5,
                    }}
                    viewport={{ once: true }}  
                    style={{ willChange: "opacity" }}
                >
                    {
                        (showAllServices) ? ( data.slice(0, 3).map((data, index) => (
                            <ServicesCard
                            isHomePage={isHomePage}
                            key={index}  
                            iconUrl={data.iconUrl}
                            title={data.title}
                            description={data.description ?? null}
                            isProducts={isProducts}
                            typesOfService={data.typesOfService ?? null}
                            />
                        )) ) : (
                            data.map((data, index) => (
                                <ServicesCard
                                isHomePage={isHomePage}
                                key={index}  
                                iconUrl={data.iconUrl}
                                title={data.title}
                                description={data.description ?? null}
                                isProducts={isProducts}
                                typesOfService={data.typesOfService ?? null}
                                />
                            )) 
                        )
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default ServicesSection
