'use client'
import { useNavigation } from "@/context/navigationContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const getBasePath = (pathname: string) => {
    if (pathname === "/") return "/";
    const segments = pathname.split("/").filter(Boolean);
    return `/${segments[0]}`;
  };


const SmallScreenNavigation : React.FC = () => {
    const pathname = usePathname();
    const basePath = getBasePath(pathname);
    const { isNavVisible } = useNavigation();
    
  return (
    <section className={`absolute w-full h-full bg-primary z-100 top-0 ${isNavVisible ? 'block 1sm:hidden' : 'hidden'} overflow-hidden`}>
        <nav role="navigation" className="w-full">
            <div className="pt-[109.2px] pb-[163.8px] flex flex-col items-center">
                <div className="w-full mx-auto flex flex-col gap-[10px] max-w-[60%] items-center justify-center pb-[16px] text-[1.125rem]/[1.5rem]">
                <Link 
                    href="/" 
                    className={`w-full text-center transition-[border] duration-[400ms] hover:border-brand border-b-[2px] ${(basePath === '/') ? 'border-brand text-tertiary' : 'border-transparent text-white'} hover:text-brand px-[1rem] py-[.5rem] mb-[.5rem]`}
                >
                    Home
                </Link>
                <Link 
                    href="/about" 
                    className={`w-full text-center transition-[border] duration-[400ms] hover:border-brand border-b-[2px] ${(basePath === '/about') ? 'border-brand text-tertiary' : 'border-transparent text-white'} hover:text-brand px-[1rem] py-[.5rem] mb-[.5rem]`}
                >
                    About
                </Link>
                <Link 
                    href="/services" 
                    className={`w-full text-center transition-[border] duration-[400ms] hover:border-brand border-b-[2px] ${(basePath === '/services') ? 'border-brand text-tertiary' : 'border-transparent text-white'} hover:text-brand px-[1rem] py-[.5rem] mb-[.5rem]`}
                >
                    Services
                </Link>
                <Link 
                    href="/contact" 
                    className={`w-full text-center transition-[border] duration-[400ms] hover:border-brand border-b-[2px] ${(basePath === '/contact') ? 'border-brand text-tertiary' : 'border-transparent text-white'} hover:text-brand px-[1rem] py-[.5rem] mb-[.5rem]`}
                >
                    Contact
                </Link>
                </div>
                <Link href='/contact' className='w-fit flex transition-all duration-[400ms] border-[2px] bg-transparent py-[.75rem] px-[1.5rem] text-[1rem]/[1.25rem] my-auto text-white border-white hover:text-black hover:bg-brand hover:border-brand font-semibold'>
                    Get in Touch
                </Link>
            </div>
        </nav>
  </section>
  )
}

export default SmallScreenNavigation
