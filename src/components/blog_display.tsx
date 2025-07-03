'use client'
import { motion } from "framer-motion";
import BlogCard from "./blog_card";
import { useAppData } from "@/context/appDataContext";
import loading from '@/lottie/loading.json'
import Lottie from "lottie-react";

const BlogDisplay = () => {
  const { articleCards, totalArticlesCount, isArticlesLoading } = useAppData();

  if (!isArticlesLoading && totalArticlesCount === 0) return null;

  return (
    <section className="w-full py-[3.75rem] overflow-hidden bg-secondary flex flex-col px-[1rem] 1sm:px-[1.5rem]">
      <div className="flex flex-col w-full max-w-[67.25rem] mx-auto items-center">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
          className="text-primary tracking-[2px] font-medium text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] uppercase mb-[1.25rem]"
        >
          Blog
        </motion.h2>

        <motion.h3
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
          }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
          className="text-primary trackin-[-1px] text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold mb-[3.5rem] text-center"
        >
          Explore Our Latest Blog Posts
        </motion.h3>
        {
          isArticlesLoading ?
          (
            <div className="flex justify-center items-center w-full">
              <Lottie
                animationData={loading}
                loop
                className="w-[200px] h-[200px] 2sm:w-[300px] 2sm:h-[300px]"
              />
            </div>
          )
            :
          (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1,
              }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
              className="w-fit grid grid-cols-1 3sm:grid-cols-2 2sm:grid-cols-3 gap-[1.25rem] 1sm:gap-[2.5rem]"
            >
              {articleCards.map((card) => (
                <BlogCard
                  key={card.slug}
                  alternativeText={card.alternativeText}
                  slug={card.slug}
                  image={card.image}
                  title={card.title}
                  category={card.category}
                  description={card.description}
                  publishedAt={card.publishedAt}
                  readTime={card.readTime}
                />
              ))}
            </motion.div>
          )
        }
      </div>
    </section>
  );
};

export default BlogDisplay;
