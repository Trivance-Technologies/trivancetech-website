'use client'
import { ArticleCard } from "@/libs/articles";
import { useState, useEffect } from "react";

async function fetchFromApi(action: string, params: Record<string, string | number> = {}) {
  const url = new URL('/api/articles', window.location.origin);
  url.searchParams.set('action', action);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export function useBlog(initialData?: {
  articleCards: ArticleCard[];
  totalArticlesCount: number;
  allTags: string[];
}) {
  // ─── Use initial data if provided, otherwise empty ───
  const [tagList, setTagList] = useState<string[]>(initialData?.allTags ?? []);
  const [totalAllArticlesCount, setTotalAllArticlesCount] = useState<number>(
    initialData?.totalArticlesCount ?? 0
  );
  const [articleCardData, setArticleCardData] = useState<ArticleCard[]>(
    initialData?.articleCards ?? []
  );
  const [allArticlesData, setAllArticlesData] = useState<ArticleCard[]>(
    initialData?.articleCards ?? []
  );
  const [isInititalDataLoading, setIsInitialDataLoading] = useState<boolean>(!initialData);

  // ─── Search / pagination state ──────────────────────────
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchTag, setSearchTag] = useState<string>("All Posts");
  const [pagination, setPagination] = useState<Record<string, number>>({ "All Posts": initialData?.articleCards?.length ?? 0 });
  const [hasMore, setHasMore] = useState<Record<string, boolean>>({
    "All Posts": (initialData?.articleCards?.length ?? 0) < (initialData?.totalArticlesCount ?? 0),
  });
  const [activeQuery, setActiveQuery] = useState<string>("");
  const [isArticlesDataFetching, setIsArticlesDataFetching] = useState<boolean>(false);

  // ─── Load more initial data if not provided ────────────
  useEffect(() => {
    if (initialData) return;

    async function loadInitial() {
      try {
        const [articles, tags] = await Promise.all([
          fetchFromApi('getAllArticles', { start: 0, limit: 10 }),
          fetchFromApi('getAllTags'),
        ]);
        const { articleCards, totalArticlesCount } = articles;
        setTotalAllArticlesCount(totalArticlesCount);
        setTagList(tags);
        setPagination({ "All Posts": articleCards.length });
        setHasMore({ "All Posts": articleCards.length < totalArticlesCount });
        setArticleCardData(articleCards);
        setAllArticlesData(articleCards);
      } catch (error) {
        console.error('Failed to load initial blog data:', error);
      } finally {
        setIsInitialDataLoading(false);
      }
    }
    loadInitial();
  }, []);

  // ─── Effect: fetch by tag when tag changes ─────────────
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
      try {
        const { articleCards, totalArticlesCount } = await fetchFromApi('getArticlesByTag', {
          tag: searchTag,
          start: 0,
          limit: 10,
        });
        setArticleCardData(articleCards);
        setPagination((prev) => ({ ...prev, [searchTag]: articleCards.length }));
        setHasMore((prev) => ({
          ...prev,
          [searchTag]: articleCards.length < totalArticlesCount,
        }));
      } catch (error) {
        console.error('Failed to fetch articles by tag:', error);
      } finally {
        setIsArticlesDataFetching(false);
      }
    }

    fetchByTag();
  }, [searchTag, allArticlesData, totalAllArticlesCount]);

  // ─── Handlers (unchanged, but they use fetchFromApi) ──
  const handleSearch = async () => {
    const trimmedQuery = searchValue.trim();
    if (!trimmedQuery) return;
    setIsArticlesDataFetching(true);
    try {
      const { articleCards, totalArticlesCount } = await fetchFromApi('getArticlesBySearch', {
        query: trimmedQuery,
        tag: searchTag,
        start: 0,
        limit: 10,
      });
      setArticleCardData(articleCards);
      setActiveQuery(trimmedQuery);
      setPagination((prev) => ({ ...prev, [trimmedQuery]: articleCards.length }));
      setHasMore((prev) => ({
        ...prev,
        [trimmedQuery]: articleCards.length < totalArticlesCount,
      }));
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsArticlesDataFetching(false);
    }
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
      try {
        const { articleCards, totalArticlesCount } = await fetchFromApi('getArticlesByTag', {
          tag: searchTag,
          start: 0,
          limit: 10,
        });
        setArticleCardData(articleCards);
        setPagination((prev) => ({ ...prev, [searchTag]: articleCards.length }));
        setHasMore((prev) => ({
          ...prev,
          [searchTag]: articleCards.length < totalArticlesCount,
        }));
      } catch (error) {
        console.error('Failed to fetch articles by tag after clear:', error);
      } finally {
        setIsArticlesDataFetching(false);
      }
    }
  };

  const handleLoadMore = async () => {
    const currentStart = pagination[searchTag] ?? 0;
    const limit = 10;
    let moreArticles: ArticleCard[] = [];
    let totalArticlesCount = 0;

    try {
      if (activeQuery) {
        const result = await fetchFromApi('getArticlesBySearch', {
          query: activeQuery,
          tag: searchTag,
          start: currentStart,
          limit,
        });
        moreArticles = result.articleCards;
        totalArticlesCount = result.totalArticlesCount;
      } else if (searchTag === "All Posts") {
        const result = await fetchFromApi('getAllArticles', { start: currentStart, limit });
        moreArticles = result.articleCards;
        totalArticlesCount = result.totalArticlesCount;
        setAllArticlesData((prev) => [...prev, ...moreArticles]);
      } else {
        const result = await fetchFromApi('getArticlesByTag', {
          tag: searchTag,
          start: currentStart,
          limit,
        });
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
    } catch (error) {
      console.error('Load more failed:', error);
    }
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
}