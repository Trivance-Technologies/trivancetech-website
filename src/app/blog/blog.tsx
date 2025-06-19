'use client'
import BlogCard from "@/components/blog_card";
import { ArticleCard, getAllArticles, getArticlesBySearch, getArticlesByTag } from "@/libs/articles";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogProps {
  articleCards: ArticleCard[];
  tagList: string[];
  totalAllArticlesCount: number;
}

const Blog = ({ articleCards, tagList, totalAllArticlesCount }: BlogProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchTag, setSearchTag] = useState<string>("All Posts");
  const [pagination, setPagination] = useState<Record<string, number>>({"All Posts": articleCards.length});
  const [hasMore, setHasMore] = useState<Record<string, boolean>>({"All Posts": articleCards.length < totalAllArticlesCount,}); //if a tag has enough articles in the backend to load more.

  const [activeQuery, setActiveQuery] = useState<string>("");

  const [articleCardData, setArticleCardData] = useState<ArticleCard[]>(articleCards);

  useEffect(() => {
      if (searchTag === "All Posts") return;

      async function fetchByTag() {
        const { articleCards, totalArticlesCount } = await getArticlesByTag(searchTag, 0, 10);
        setArticleCardData(articleCards);
        setPagination((prev) => ({ ...prev, [searchTag]: articleCards.length }));
        setHasMore((prev) => ({
          ...prev,
          [searchTag]: articleCards.length < totalArticlesCount,
        }));
      }

      fetchByTag();
  }, [searchTag]);

  return (
    <section className="w-full py-[6.25rem] px-[1rem] 1sm:px-[1.5rem] flex flex-col items-center bg-secondary">
      {
        (totalAllArticlesCount > 0)
         ? 
         (
          <div className="flex flex-col mx-auto w-full max-w-[67.25rem] items-center">
            <h2 className="self-start uppercase tracking-[2px] font-medium text-[.875rem]/[1.25rem] 3sm:text-[1rem]/[1.25rem] opacity-[.6] text-primary mb-[4rem]">Search Our Blog Library</h2>
            <div className="flex flex-wrap gap-2 self-start">
              {tagList.map((tag, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 hover:cursor-pointer text-sm font-medium text-gray-700 uppercase tracking-wide hover:bg-gray-100 ${(searchTag === tag) ? 'border border-gray-400' : ''}`}
                  onClick={() => { setSearchTag(tag); setActiveQuery(""); }}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="w-full flex flex-row gap-[.5rem] items-center">
              <div className="w-full flex items-center border border-gray-300 px-4 py-2 bg-white self-start my-[1.5rem]">
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
              <button className="h-fit hover:cursor-pointer px-[1.5rem] py-[.5rem] border-[2px] hover:border-primary hover:text-primary text-brand border-primary bg-primary hover:bg-transparent transition-[border-color,color,background-color] duration-[400ms]"
                onClick={
                async () => {
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
                }}
              >
                Search
              </button>
            </div>
            <div className="w-fit grid grid-cols-1 3sm:grid-cols-2 1sm:grid-cols-3 gap-[1.25rem] 1sm:gap-[2.5rem] justify-around">
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
                  />
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500 py-10">
                  No posts found matching your search.
                </p>
              )}
            </div>
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
              There is currently no article to read now
            </p>
          </div>  
         )
      }
    </section>
  )
}

export default Blog;