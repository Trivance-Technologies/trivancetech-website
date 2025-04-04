'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface IdealsCardPropTypes {
    iconUrl : string,
    title : string,
    description: string,
    index: number
}

const IdealsCard : React.FC<IdealsCardPropTypes> = ({ iconUrl, title, description, index }) => {

  const [expanded, setExpanded] = useState(false);


  return (
    <motion.div
      className="w-full gap-[1.25rem] flex flex-col items-center"
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.3 * index,
      }}
      viewport={{ once: true }}
      style={{ willChange: "transform, opacity" }}
    >
      <span
        className="w-[60px] h-[60px] bg-primary"
        style={{
          maskImage: `url('${iconUrl}')`,
          WebkitMaskImage: `url('${iconUrl}')`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      ></span>

      <h3 className="text-[1.25rem]/[1.5rem] font-semibold text-primary text-center">{title}</h3>

      <p className="opacity-[.6] text-primary text-[1rem]/[1.25rem]">
        {expanded ? description : `${description.slice(0, 120)}... `}
        <button
          className="text-blue-500 font-medium hover:underline" style={{paddingLeft: (expanded) ? '5px' : '0px'}}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </p>
    </motion.div>
  )
}

export default IdealsCard
