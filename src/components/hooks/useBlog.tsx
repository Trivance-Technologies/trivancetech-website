'use client'
import { ArticleCard, getAllArticles, getAllTags, getArticlesBySearch, getArticlesByTag } from "@/libs/articles";
import { useState, useEffect } from "react";

export const useBlog = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [totalAllArticlesCount, setTotalAllArticlesCount] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchTag, setSearchTag] = useState<string>("All Posts");
  const [pagination, setPagination] = useState<Record<string, number>>({"All Posts": 0});
  const [hasMore, setHasMore] = useState<Record<string, boolean>>({"All Posts": false});

  const [activeQuery, setActiveQuery] = useState<string>("");

  const [articleCardData, setArticleCardData] = useState<ArticleCard[]>([]);
  const [allArticlesData, setAllArticlesData] = useState<ArticleCard[]>([]);
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
      setAllArticlesData(articleCards);
      setIsInitialDataLoading(false);
    }

    loadInitial();
  }, []);

  useEffect(() => {
    if (searchTag === "All Posts") {
      setArticleCardData(allArticlesData);
      setPagination((prev) => ({ ...prev, "All Posts": allArticlesData.length }));
      setHasMore((prev) => ({
        ...prev,
        "All Posts": allArticlesData.length < totalAllArticlesCount,
      }));
      return;
    }

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
  }, [searchTag, allArticlesData, totalAllArticlesCount]);

  const handleSearch = async () => {
    const trimmedQuery = searchValue.trim();
    if (trimmedQuery === "") return;
    
    setIsArticlesDataFetching(true);

    const { articleCards, totalArticlesCount } = await getArticlesBySearch(trimmedQuery, searchTag, 0, 10);
    setArticleCardData(articleCards);
    setActiveQuery(trimmedQuery);
    setPagination((prev) => ({ ...prev, [trimmedQuery]: articleCards.length }));
    setHasMore((prev) => ({
      ...prev,
      [trimmedQuery]: articleCards.length < totalArticlesCount,
    }));
    setIsArticlesDataFetching(false);
  };

  const handleClearSearch = async () => {
    setSearchValue("");
    setActiveQuery("");
    
    if (searchTag === "All Posts") {
      setArticleCardData(allArticlesData);
      setPagination((prev) => ({ ...prev, "All Posts": allArticlesData.length }));
      setHasMore((prev) => ({
        ...prev,
        "All Posts": allArticlesData.length < totalAllArticlesCount,
      }));
    } else {
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
  };

  const handleLoadMore = async () => {
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
      setAllArticlesData((prev) => [...prev, ...moreArticles]);
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
  };

  const handleTagSelect = (tag: string) => {
    setSearchTag(tag);
    setActiveQuery("");
  };

  return {
    tagList,
    totalAllArticlesCount,
    searchValue,
    searchTag,
    pagination,
    hasMore,
    activeQuery,
    articleCardData,
    allArticlesData,
    isInititalDataLoading,
    isArticlesDataFetching,
    
    setSearchValue,
    
    handleSearch,
    handleClearSearch,
    handleLoadMore,
    handleTagSelect,
  };
};