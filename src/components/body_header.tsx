'use client';
import { useNotFoundPageContext } from '@/context/notFoundPageContext';
import { bodyHeaderDataMap } from '@/data/bodyHeaderData';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react';


const BodyHeader: React.FC = () => {
  const pathname = usePathname();
  const [content, setContent] = useState<typeof bodyHeaderDataMap["/"] | null>(null);
  const MotionImage = motion.create(Image);
  const { toggleIs404 } = useNotFoundPageContext();

  useEffect(() => {
    toggleIs404(false);
    if (bodyHeaderDataMap[pathname as keyof typeof bodyHeaderDataMap]) {
        setContent(bodyHeaderDataMap[pathname as keyof typeof bodyHeaderDataMap]);
    } else {
        setContent(null);
    }
  }, [pathname, toggleIs404]);

  if (!content) return null;

  return (
<section className="relative w-full bg-primary pt-[4.599375rem] 3sm:pt-[6rem] 1sm:pt-[11.25rem] 1sm:pb-[3.75rem] pb-[2rem] overflow-hidden">
  {/* Blue Blur - Top Left */}
  <div className="absolute top-[-15%] left-[-10%] w-[min(40vw,400px)] h-[min(100vh,1000px)] bg-glow opacity-30 rounded-full blur-[150px] rotate-[-27.4933deg]" />
  {/* Blue Blur - Bottom Right */}
  <div className="absolute bottom-[-15%] right-[-10%] w-[min(40vw,400px)] h-[min(100vh,1000px)] bg-glow opacity-30 rounded-full blur-[150px]" />
  {/* Large Central Blur */}
  <div className="absolute bottom-[-10%] left-[50%] translate-x-[-50%] w-[min(70vw,800px)] h-[min(70vw,800px)] bg-glow opacity-30 rounded-full blur-[200px] rotate-[10deg]" />

  <div className="relative z-10 1sm:px-[1.25rem] px-0 w-full">
    <div className="mx-auto w-full max-w-[67.25rem]">
      <div className="flex flex-col-reverse 1sm:flex-row gap-[1rem] 3sm:gap-[2rem] 1sm:gap-[3.75rem]">
        <motion.div
          className="flex flex-col 1sm:max-w-[29.625rem] gap-[1.25rem] w-full 1sm:px-0 px-[1rem]"
          key={pathname}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            opacity: { duration: 0.5, delay: 0.5 },
          }}
          viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="w-full flex flex-col gap-[1.25rem] text-left items-start">
            <h1 className="text-brand uppercase text-[1rem]/[1.25rem] font-medium tracking-[2px]">
              {content.title}
            </h1>
            <h2 className="text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold text-white tracking-[-1px]">
              {content.subTitle}
            </h2>
            <p className="text-white text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] font-normal opacity-[.8]">
              {content.description}
            </p>
          </div>
          <Link
            href={content.link}
            className="transition-[background-color,color] duration-[400ms] border-[2px] hover:bg-transparent py-[.625rem] 2sm:py-[.875rem] px-[1.25rem] 2sm:px-[1.875rem] text-[.875rem]/[1.25rem] 3sm:text-[1.125rem]/[1.375rem] text-black hover:text-brand bg-brand border-brand font-semibold w-fit"
          >
           {`${(content.link === '/contact' ? 'Get in Touch' : 'Know More')}`}
          </Link>
        </motion.div>
        <MotionImage
          key={`${pathname}2`}
          src={content.imageLink}
          alt={content.imageAlt}
          priority
          width={content.width}
          height={content.height}
          className="object-cover 1sm:max-h-[22.23rem] max-h-[33.92rem] w-full"
          sizes="(max-width: 640px) 100vw, (min-width: 641px) calc(22.23rem * (content.width / content.height))"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
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
