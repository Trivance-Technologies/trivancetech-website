'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { logoDetails, retrieveClientLogos } from '@/libs/strapi_calls';
import { ArticleCard, getLatestArticles } from '@/libs/articles';

type AppDataContextType = {
  logos: logoDetails[];
  isLogosLoading: boolean;
  articleCards: ArticleCard[];
  totalArticlesCount: number;
  isArticlesLoading: boolean;
};

const AppDataContext = createContext<AppDataContextType>({
  logos: [],
  isLogosLoading: true,
  articleCards: [],
  totalArticlesCount: 0,
  isArticlesLoading: true,
});

export const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [logos, setLogos] = useState<logoDetails[]>([]);
  const [isLogosLoading, setIsLogosLoading] = useState(true);

  const [articleCards, setArticleCards] = useState<ArticleCard[]>([]);
  const [totalArticlesCount, setTotalArticlesCount] = useState<number>(0);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [fetchedLogos, fetchedArticles] = await Promise.all([
        retrieveClientLogos(),
        getLatestArticles()
      ]);
      
      setLogos(fetchedLogos);
      setIsLogosLoading(false);
      setArticleCards(fetchedArticles.articleCards);
      setTotalArticlesCount(fetchedArticles.totalArticlesCount);
      setIsArticlesLoading(false);
    };

    fetchData();
  }, []);

  return (
    <AppDataContext.Provider
      value={{
        logos,
        isLogosLoading,
        articleCards,
        totalArticlesCount,
        isArticlesLoading,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
