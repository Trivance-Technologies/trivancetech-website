'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface ContactDetailsCardProps {
  iconUrl: string;
  title: string;
  detail: string;
  index: number;
}

const ContactDetailsCard: React.FC<ContactDetailsCardProps> = ({ iconUrl, title, detail, index }) => {
  return (
    <motion.div className='flex flex-col w-full 1sm:max-w-[13rem] gap-[1.25rem] text-center items-center mx-auto'
    initial={{ x: 200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{
        duration: .8,
        ease: "easeInOut",
        delay: .3 * index
    }}
    viewport={{ once: true }}
    style={{ willChange: "transform, opacity" }}
    >
      <div className='relative w-[24px] h-[24px]'>
        <Image src={iconUrl} fill alt='icon' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      <h2 className='text-[1.125rem]/[1.5rem] 2sm:text-[1.25rem]/[1.5rem] font-semibold text-primary'>{title}</h2>
      <p className='opacity-[.6] text-[1rem]/[1.25rem] text-primary'>{detail}</p>
    </motion.div>
  )
}

export default ContactDetailsCard
