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
    const fetchLogos = async () => {
      const fetchedLogos = await retrieveClientLogos();
      setLogos(fetchedLogos);
      setIsLogosLoading(false);
    };

    const fetchArticles = async () => {
      const { articleCards: fetchedCards, totalArticlesCount: fetchedCount } = await getLatestArticles();
      setArticleCards(fetchedCards);
      setTotalArticlesCount(fetchedCount);
      setIsArticlesLoading(false);
    };

    fetchLogos();
    fetchArticles();
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
