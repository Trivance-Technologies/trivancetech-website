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

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const headerHeight = 76;
    const progress = Math.min(scrollTop / headerHeight, 1);
    setScrollProgress(progress);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed top-0 z-[9999] w-full 1sm:px-[1.5rem] pl-[1.5rem] transition-[background-color] duration-[300ms]"
      style={{
        backgroundColor: (is404) ? `rgba(0, 33, 71, 1)` : `rgba(0, 33, 71, ${scrollProgress})`,
      }}
    >
      <nav
        role="navigation"
        className="w-full flex flex-row mx-auto max-w-[67.25rem] gap-[16px] py-[20px] justify-between"
      >
        <Link
          href="/"
          className="w-[14.3125rem] h-[3.5rem] flex items-center"
        >
          <Image
            width={4678}
            height={1136}
            src={"/logos/trivance.svg"}
            alt={"logo of trivance tech"}
            className="object-cover"
            priority
          />
        </Link>

        <div className="1sm:flex hidden flex-row text-[1rem]/[1.5rem] text-tertiary my-auto">
          <Link href="/">
            <span
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] ${
                basePath === "/" ? "border-brand" : "border-transparent"
              } hover:text-brand px-[1rem] py-[.5rem]`}
            >
              Home
            </span>
          </Link>
          <Link href="/about">
            <span
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] ${
                basePath === "/about" ? "border-brand" : "border-transparent"
              } hover:text-brand px-[1rem] py-[.5rem]`}
            >
              About
            </span>
          </Link>
          <Link href="/services">
            <span
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] ${
                basePath === "/services" ? "border-brand" : "border-transparent"
              } hover:text-brand px-[1rem] py-[.5rem]`}
            >
              Services
            </span>
          </Link>
          <Link href="/products">
            <span
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] ${
                basePath === "/products" ? "border-brand" : "border-transparent"
              } hover:text-brand px-[1rem] py-[.5rem]`}
            >
              Products
            </span>
          </Link>
          <Link href="/contact">
            <span
              className={`transition-[border] duration-[400ms] hover:border-brand border-b-[2px] ${
                basePath === "/contact" ? "border-brand" : "border-transparent"
              } hover:text-brand px-[1rem] py-[.5rem]`}
            >
              Contact
            </span>
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

