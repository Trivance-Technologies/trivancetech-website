import { logoDetails } from '@/libs/strapi_calls';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface LogoSliderProps {
  logos: logoDetails[];
  perPage?: number;
  autoPlayInterval?: number;
}

export default function LogoSlider({ logos, perPage = 6, autoPlayInterval = 4000 }: LogoSliderProps) {
  // Chunk logos into pages
  const pages: logoDetails[][] = [];
  for (let i = 0; i < logos.length; i += perPage) {
    pages.push(logos.slice(i, i + perPage));
  }

  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = pages.length;

  useEffect(() => {
    if (pageCount <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pageCount);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [pageCount, autoPlayInterval]);

  return (
    <div className="relative w-full">
      {/* Slider container */}
      <motion.div
        key={currentPage}
        className="grid grid-cols-1 4sm:grid-cols-2 2.5sm:grid-cols-3 2sm:grid-cols-2 1sm:grid-cols-3 items-center gap-[4rem] w-fit mx-auto"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ willChange: 'transform, opacity' }}
      >
        {pages[currentPage].map((logo, idx) => (
          <Image
            key={idx}
            src={`http://localhost:1337${logo.url}`}
            width={logo.width}
            height={logo.height}
            alt={logo.alternativeText}
            className="object-cover max-w-[130px] 1sm:max-w-[154px]"
          />
        ))}
      </motion.div>

      {/* Dots navigation */}
      {pageCount > 1 && (
        <div className="flex justify-center mt-12 space-x-2 z-20">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-2.5 w-2.5 rounded-full focus:outline-none transition-transform bg-primary hover:cursor-pointer
                ${idx === currentPage ? 'scale-110' : 'opacity-50 hover:opacity-100'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
