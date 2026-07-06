import BodyHeader from "@/components/body_header";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SmallScreenNavigation from "@/components/small_screen_navigation";
import { NavigationProvider } from "@/context/navigationContext";
import { NotFoundPageContextProvider } from "@/context/notFoundPageContext";
import { Inter } from 'next/font/google';
import { Suspense } from "react";
import { Toaster } from 'sonner';
import "./globals.css";
import { AppDataProvider } from "@/context/appDataContext";
import { getLatestArticles } from "@/libs/articles";
import type { ArticleCard } from "@/libs/articles";
import { retrieveClientLogos } from "@/libs/strapi_calls";
import type { logoDetails } from "@/libs/strapi_calls";
import { cacheLife, cacheTag } from "next/cache";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Cached data-fetching function with stale-while-revalidate
async function getInitialData() {
  "use cache";
  cacheLife("hours");        // 1-hour TTL with background revalidation
  cacheTag("homepage-data"); // for manual invalidation

  let initialLogos: logoDetails[] = [];
  let initialArticleCards: ArticleCard[] = [];
  let initialTotalArticlesCount = 0;
  let initiallyLoaded = false;

  try {
    const [logos, articles] = await Promise.all([
      retrieveClientLogos(),
      getLatestArticles(),
    ]);
    initialLogos = logos;
    initialArticleCards = articles.articleCards;
    initialTotalArticlesCount = articles.totalArticlesCount;
    initiallyLoaded = true;
  } catch (error) {
    console.error("Failed to fetch initial data for layout:", error);
  }

  return { initialLogos, initialArticleCards, initialTotalArticlesCount, initiallyLoaded };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { initialLogos, initialArticleCards, initialTotalArticlesCount, initiallyLoaded } = await getInitialData();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://wealthy-power-26376c166d.strapiapp.com" />
      </head>
      <body
        className={`${inter.variable} antialiased relative`}
      >
        <Suspense>
          <AppDataProvider
            initialLogos={initialLogos}
            initialArticleCards={initialArticleCards}
            initialTotalArticlesCount={initialTotalArticlesCount}
            initiallyLoaded={initiallyLoaded}
          >
          <NavigationProvider>
          <NotFoundPageContextProvider>
            <Header />
            <main className="w-full flex flex-col" role="main">
              <Toaster position="top-center" richColors />
              <BodyHeader />
              {children}
            </main>
            <Footer/>
            <SmallScreenNavigation />
          </NotFoundPageContextProvider>
          </NavigationProvider>
          </AppDataProvider>
        </Suspense>
      </body>
    </html>
  );
}