'use client'
import BlogCard from "@/components/blog_card";
import { ArticleCard, getAllArticles, getAllTags, getArticlesBySearch, getArticlesByTag } from "@/libs/articles";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import loading from '@/lottie/loading.json'

const Blog = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [totalAllArticlesCount, setTotalAllArticlesCount] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchTag, setSearchTag] = useState<string>("All Posts");
  const [pagination, setPagination] = useState<Record<string, number>>({"All Posts": 0});
  const [hasMore, setHasMore] = useState<Record<string, boolean>>({"All Posts": false}); //if a tag has enough articles in the backend to load more.

  const [activeQuery, setActiveQuery] = useState<string>("");

  const [articleCardData, setArticleCardData] = useState<ArticleCard[]>([]);
  const [isInititalDataLoading, setIsInitialDataLoading] = useState<boolean>(true);
  const [isArticlesDataFetching, setIsArticlesDataFetching] = useState<boolean>(false);

  useEffect(() => {
    async function loadInitial() {
      const { articleCards, totalArticlesCount } = await getAllArticles(0, 10);
      const allTags = await getAllTags();

      setTotalAllArticlesCount(totalArticlesCount);
      setTagList(allTags);
      setPagination({ "All Posts": articleCards.length });
      setHasMore({ "All Posts": articleCards.length < totalArticlesCount });
      setArticleCardData(articleCards);
      setIsInitialDataLoading(false);
    }

    loadInitial();
  }, []);

  useEffect(() => {
      if (searchTag === "All Posts") return;

      async function fetchByTag() {
        setIsArticlesDataFetching(true);
        const { articleCards, totalArticlesCount } = await getArticlesByTag(searchTag, 0, 10);
        setArticleCardData(articleCards);
        setPagination((prev) => ({ ...prev, [searchTag]: articleCards.length }));
        setHasMore((prev) => ({
          ...prev,
          [searchTag]: articleCards.length < totalArticlesCount,
        }));
        setIsArticlesDataFetching(false);
      }

      fetchByTag();
  }, [searchTag]);

  return (
    <section className="w-full py-[6.25rem] px-[1rem] 1sm:px-[1.5rem] flex flex-col items-center bg-secondary">
      {
       isInititalDataLoading ?
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
       ( (totalAllArticlesCount > 0)
         ? 
         (
          <div className="flex flex-col mx-auto w-full max-w-[67.25rem] items-center">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                  duration: 1,
                  ease: "easeInOut",
              }}
              viewport={{ once: true }}  
              style={{ willChange: "transform, opacity" }}   
              className="self-start uppercase tracking-[2px] font-medium text-[.875rem]/[1.25rem] 3sm:text-[1rem]/[1.25rem] opacity-[.6] text-primary mb-[4rem]">Search Our Blog Library</motion.h2>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                delay: .5
            }}
            viewport={{ once: true }}  
            style={{ willChange: "transform, opacity" }}  
            className="flex flex-wrap gap-2 self-start">
              {tagList.map((tag, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 hover:cursor-pointer text-sm font-medium text-gray-700 uppercase tracking-wide hover:bg-gray-100 ${(searchTag === tag) ? 'border border-gray-400' : ''}`}
                  onClick={() => { setSearchTag(tag); setActiveQuery(""); }}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1
            }}
            viewport={{ once: true }}  
            style={{ willChange: "transform, opacity" }}  
            className="w-full flex flex-col 3sm:flex-row gap-[1rem] 3sm:gap-[.5rem] items-center my-[1.5rem]">
              <div className="w-full flex items-center border border-gray-300 px-4 py-2 bg-white self-start">
                <span 
                  className="mr-2 text-gray-500"
                >
                  <Search className="w-5 h-5" />
                </span>
                <input 
                  type="text" 
                  placeholder="Search for posts..."
                  aria-label="Search posts"
                  onChange={(e) => { setSearchValue(e.target.value) }}
                  value={searchValue}
                  className="flex-grow bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                />
                <button 
                  className={`mr-2 text-red-500 hover:cursor-pointer ${(searchValue.trim() === "") ? "hidden" : "block"}`}
                  aria-label = "clear search"
                  onClick={() => setSearchValue("")}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <button className="self-start flex h-fit hover:cursor-pointer px-[1.5rem] py-[.5rem] border-[2px] hover:border-primary hover:text-primary text-brand border-primary bg-primary hover:bg-transparent transition-[border-color,color,background-color] duration-[400ms]"
                onClick={
                async () => {
                  setIsArticlesDataFetching(true);
                  const trimmedQuery = searchValue.trim();
                  if (trimmedQuery === "") return;

                  const { articleCards, totalArticlesCount } = await getArticlesBySearch(trimmedQuery, searchTag, 0, 10);
                  setArticleCardData(articleCards);
                  setActiveQuery(trimmedQuery);
                  setPagination((prev) => ({ ...prev, [trimmedQuery]: articleCards.length }));
                  setHasMore((prev) => ({
                    ...prev,
                    [trimmedQuery]: articleCards.length < totalArticlesCount,
                  }));
                  setIsArticlesDataFetching(false);
                }}
              >
                Search
              </button>
            </motion.div>
            {isArticlesDataFetching ?
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
            ( <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 1.5
            }}
            viewport={{ once: true }}  
            style={{ willChange: "transform, opacity" }}  
            className="w-fit grid grid-cols-1 3sm:grid-cols-2 1sm:grid-cols-3 gap-[1.25rem] 1sm:gap-[2.5rem] justify-around">
              {articleCardData.length > 0 ? (
                articleCardData.map((card) => (
                  <BlogCard
                    key={card.slug}
                    slug={card.slug}
                    image={card.image}
                    title={card.title}
                    category={card.category}
                    description={card.description}
                    publishedAt={card.publishedAt}
                    readTime={card.readTime}
                    alternativeText={card.alternativeText}
                  />
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500 py-10">
                  No posts found matching your search.
                </p>
              )}
            </motion.div> )
            }
            {hasMore[searchTag] && (
              <button
              onClick={async () => {
                  const currentStart = pagination[searchTag] ?? 0;
                  const limit = 10;

                  let moreArticles: ArticleCard[] = [];
                  let totalArticlesCount: number = 0;

                  if (activeQuery) {
                    const result = await getArticlesBySearch(activeQuery, searchTag, currentStart, limit);
                    moreArticles = result.articleCards;
                    totalArticlesCount = result.totalArticlesCount;
                  } else if (searchTag === "All Posts") {
                    const result = await getAllArticles(currentStart, limit);
                    moreArticles = result.articleCards;
                    totalArticlesCount = result.totalArticlesCount;
                  } else {
                    const result = await getArticlesByTag(searchTag, currentStart, limit);
                    moreArticles = result.articleCards;
                    totalArticlesCount = result.totalArticlesCount;
                  }

                  setArticleCardData((prev) => [...prev, ...moreArticles]);

                  setPagination((prev) => ({
                    ...prev,
                    [searchTag]: currentStart + moreArticles.length,
                  }));

                  setHasMore((prev) => ({
                    ...prev,
                    [searchTag]: currentStart + moreArticles.length < totalArticlesCount,
                  }));
                }}

                className="mt-14 px-6 py-2 border-[2px] border-primary text-primary hover:text-brand hover:border-primary hover:bg-primary bg-transparent transition-[border-color,color,background-color] duration-[400ms] hover:cursor-pointer"
              >
                Load More
              </button>
            )}
          </div>
        ) : (
        <div className="flex mx-auto w-full max-w-[67.25rem] items-center justify-center">
          <p className="col-span-3 text-center text-gray-500 py-10">
            There are currently no articles to display now
          </p>
        </div>  
        ) )
      }
    </section>
  )
}

export default Blog;