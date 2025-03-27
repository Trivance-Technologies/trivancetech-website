'use client'
import { motion } from 'framer-motion';
import React from 'react';

interface IdealsCardPropTypes {
    iconUrl : string,
    title : string,
    description: string,
    index: number
}

const IdealsCard : React.FC<IdealsCardPropTypes> = ({ iconUrl, title, description, index }) => {
  return (
    <motion.div className='w-full gap-[1.25rem] flex flex-col items-center'
      initial={{ x: '20%', opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
          duration: .8,
          ease: "easeInOut",
          delay: .3 * index
      }}
      viewport={{ once: true }}
    >
        <span
          className='w-[60px] h-[60px] bg-primary'
          style={{
            maskImage: `url('${iconUrl}')`, 
            WebkitMaskImage: `url('${iconUrl}')`, 
            maskSize: 'contain', 
            maskRepeat: 'no-repeat', 
            maskPosition: 'center'
        }}></span>
      <h3 className='text-[1.25rem]/[1.5rem] font-semibold text-primary'>{title}</h3>
      <p className='opacity-[.6] text-primary text-[1rem]/[1.25rem]'>{description}</p>
    </motion.div>
  )
}

export default IdealsCard
