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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased relative`}
      >
        <Suspense>
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
        </Suspense>
      </body>
    </html>
  );
}
