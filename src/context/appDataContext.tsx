'use client'
import React, { createContext, useContext } from 'react';
import type { logoDetails } from '@/libs/strapi_calls';
import type { ArticleCard } from '@/libs/articles';

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

export const AppDataProvider = ({
  children,
  initialLogos = [],
  initialArticleCards = [],
  initialTotalArticlesCount = 0,
  initiallyLoaded = false,
}: {
  children: React.ReactNode;
  initialLogos?: logoDetails[];
  initialArticleCards?: ArticleCard[];
  initialTotalArticlesCount?: number;
  initiallyLoaded?: boolean;
}) => {
  const value: AppDataContextType = {
    logos: initialLogos,
    isLogosLoading: !initiallyLoaded,
    articleCards: initialArticleCards,
    totalArticlesCount: initialTotalArticlesCount,
    isArticlesLoading: !initiallyLoaded,
  };

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
