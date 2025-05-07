"use client";
import { useNavigation } from "@/context/navigationContext";
import { useNotFoundPageContext } from "@/context/notFoundPageContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const getBasePath = (pathname: string) => {
  if (pathname === "/") return "/";
  const segments = pathname.split("/").filter(Boolean);
  return `/${segments[0]}`;
};

const Header: React.FC = () => {
  const pathname = usePathname();
  const basePath = getBasePath(pathname);

  const { toggleNavigation } = useNavigation();
  const { isNavVisible } = useNavigation();
  const { is404 } = useNotFoundPageContext();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const headerHeight = 76;
    const progress = Math.min(scrollTop / headerHeight, 1);
    setScrollProgress(progress);
  };

  const handleResize = () => setIsSmallScreen(window.innerWidth < 991);


  useEffect(() => {
    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed top-0 z-[9999] w-full 1sm:pl-[1rem] pl-[1.5rem] 1sm:pr-[1rem] pr-0 transition-[background-color] duration-[300ms]"
      style={{
        backgroundColor: isSmallScreen
        ? `rgba(0, 33, 71, 1)`
        : (is404 ? `rgba(0, 33, 71, 1)` : `rgba(0, 33, 71, ${scrollProgress})`),
      }}
    >
      <nav
        role="navigation"
        className="w-full flex flex-row mx-auto max-w-[67.25rem] gap-[16px] py-[20px] justify-between"
      >
        <Link
          aria-label="Trivance Tech homepage"
          href="/"
          className="w-[8.5875rem] h-[2.1rem] 2sm:w-[14.3125rem] 2sm:h-[3.5rem] flex items-center"
        >
          <div
            style={{
              maskImage: "url('/logos/trivance.svg')",
              WebkitMaskImage: "url('/logos/trivance.svg')",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              width: "100%",
              height: "100%"
            }}
            className="bg-brand"
            aria-label="logo of trivance tech"
          />
        </Link>

        <div className="1sm:flex hidden flex-row text-[1rem]/[1.5rem] text-tertiary my-auto">
          <Link 
              href="/" 
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] 
              ${basePath === "/" ? "border-brand" : "border-transparent"} 
              hover:text-brand px-[1rem] py-[.5rem]`}
          >
              Home
          </Link>
          <Link 
              href="/about" 
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] 
              ${basePath === "/about" ? "border-brand" : "border-transparent"} 
              hover:text-brand px-[1rem] py-[.5rem]`}
          >
              About
          </Link>
          <Link 
              href="/services" 
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] 
              ${basePath === "/services" ? "border-brand" : "border-transparent"} 
              hover:text-brand px-[1rem] py-[.5rem]`}
          >
              Services
          </Link>
          <Link 
              href="/products" 
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] 
              ${basePath === "/products" ? "border-brand" : "border-transparent"} 
              hover:text-brand px-[1rem] py-[.5rem]`}
          >
              Products
          </Link>
          <Link 
              href="/contact" 
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] 
              ${basePath === "/contact" ? "border-brand" : "border-transparent"} 
              hover:text-brand px-[1rem] py-[.5rem]`}
          >
              Contact
          </Link>
        </div>
        <Link
          href="/contact"
          className="1sm:flex hidden transition-[background-color,color,border-color] duration-[400ms] border-[2px] bg-transparent py-[.75rem] px-[1.5rem] text-[1rem]/[1.25rem] my-auto text-white border-white hover:text-black hover:bg-brand hover:border-brand font-semibold"
        >
          Get in Touch
        </Link>
        <button
          className="w-[5rem] 1sm:hidden flex items-center justify-center"
          onClick={toggleNavigation}
        >
          <Image
            width={24}
            height={24}
            src={isNavVisible ? "/close.svg" : "/hamburger.svg"}
            className="text-white"
            alt="a hamburger icon"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;

