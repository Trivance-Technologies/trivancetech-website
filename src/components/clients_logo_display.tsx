'use client'
import { motion } from "framer-motion";
import LogoSlider from "./logo_slider";
import { useAppData } from "@/context/appDataContext";
import loading from '@/lottie/loading.json'
import Lottie from "lottie-react";

const ClientsLogoDisplay = () => {
  const { logos, isLogosLoading } = useAppData();

  if ((logos.length === 0) && !isLogosLoading) return null;

  return (
    <section className="w-full py-[6rem] 1sm:py-[7.5rem] bg-secondary overflow-hidden">
      <div className="w-full px-[1rem] 1sm:px-[1.5rem] flex justify-center">
        <div className='flex flex-col 2sm:flex-row w-full max-w-[67.25rem] items-start 2sm:items-center gap-[3rem] 1sm:gap-[4.75rem]'>
          <motion.div
            className="flex flex-col gap-[1.5rem] 2sm:max-w-[27rem] w-full"
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
            <div className="flex flex-col gap-[1.25rem]">
              <h2 className="text-primary tracking-[2px] font-medium text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] uppercase">
                Our Awesome Clients
              </h2>
              <h3 className="text-primary trackin-[-1px] text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold">
                Trusted By and Delivering Excellence to Top Brands
              </h3>
            </div>
            <p className="text-primary opacity-[.6] text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] font-normal">
              We&rsquo;ve had the privilege of partnering with industry leaders and innovative organizations, delivering tailored solutions that drive growth, efficiency, and success. Our commitment to excellence ensures every client achieves their goals with confidence.
            </p>
          </motion.div>
          {
            isLogosLoading ? (
            <div className="flex justify-center items-center w-full">
              <Lottie
                animationData={loading}
                loop
                className="w-[200px] h-[200px] 2sm:w-[300px] 2sm:h-[300px]"
              />
            </div>
            ) : (
            <LogoSlider logos={logos} />
            )
          }
        </div>
      </div>
    </section>
  );
};

export default ClientsLogoDisplay;
