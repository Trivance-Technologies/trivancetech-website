'use client'
import Link from 'next/link';
import { usePathname } from "next/navigation";

const getBasePath = (pathname: string) => {
    if (pathname === "/") return "/";
    const segments = pathname.split("/").filter(Boolean);
    return `/${segments[0]}`;
};

const currentYear = new Date().getFullYear();

const Footer = () => {
    const pathname = usePathname();
    const basePath = getBasePath(pathname);
    
    return (
        <footer className='w-full pt-[3.25rem] pb-[1.25rem] flex flex-col bg-primary items-center overflow-hidden'>
            <section className='px-[1rem] 1sm:px-[1.5rem] w-full flex justify-center items-center'>
                <div className='flex 2sm:flex-row flex-col mx-auto w-full max-w-[67.25rem] 2sm:gap-[3rem] gap-[48px]'>
                    <section className='flex flex-col 2sm:max-w-[18.1rem] 2sm:gap-[36px] gap-[20px] w-full'>
                        <Link aria-label="Trivance Tech homepage" href="/" className='w-full max-w-[14.3125rem] h-[3.5rem] flex items-center justify-center'>
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
                        <p className='text-left text-[1rem]/[1.25] font-normal w-full text-white'>Innovation and progress, powered by tailored expertise designed for you.</p>
                        <div className='flex flex-row justify-start w-full gap-[.75rem]'>
                            <Link aria-label="Trivance Tech's LinkedIn Page" href="https://ng.linkedin.com/company/trivance-technologies-limited" target="_blank" className='transition-all duration-[400ms] rounded-full w-[2rem] h-[2rem] flex justify-center items-center bg-secondary hover:bg-brand'>
                                <div style={{
                                        maskImage: "url('/logos/linkedin.svg')",
                                        WebkitMaskImage: "url('/logos/linkedin.svg')",
                                        maskSize: "contain",
                                        maskRepeat: "no-repeat",
                                        maskPosition: "center",
                                        width: "15px",
                                        height: "15px"
                                    }} className='bg-primary'>
                                </div>
                            </Link>
                            <Link aria-label="Trivance Tech's Facebook Page" href="https://www.facebook.com/trivancetech" target="_blank" className='transition-all duration-[400ms] rounded-full w-[2rem] h-[2rem] flex justify-center items-center bg-secondary hover:bg-brand'>
                                <div style={{
                                        maskImage: "url('/logos/facebook.svg')",
                                        WebkitMaskImage: "url('/logos/facebook.svg')",
                                        maskSize: "contain",
                                        maskRepeat: "no-repeat",
                                        maskPosition: "center",
                                        width: "14px",
                                        height: "14px"
                                    }} className='bg-primary'>
                                </div>
                            </Link>
                        </div>
                    </section>
                    <section className="w-full 2sm:max-w-[20rem] flex flex-col text-left 2sm:items-center items-start">
                        <h2 className="w-[100px] text-secondary text-[1rem]/[1.25rem] mb-[.875rem] 2ms:mb-[1.5rem] font-semibold text-left">
                            Useful Links
                        </h2>
                        <div className="w-[100px] flex flex-col justify-start items-start gap-[1.25rem] 2ms:gap-[1.5rem] text-left">
                            <Link 
                                href="/" 
                                className={`transition-all duration-[400ms] ${(basePath === '/') ? 'text-brand' : 'text-secondary'} hover:text-brand`}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/about" 
                                className={`transition-all duration-[400ms] ${(basePath === '/about') ? 'text-brand' : 'text-secondary'} hover:text-brand`}
                            >
                                About
                            </Link>
                            <Link 
                                href="/services" 
                                className={`transition-all duration-[400ms] ${(basePath === '/services') ? 'text-brand' : 'text-secondary'} hover:text-brand`}
                            >
                                Services
                            </Link>
                            <Link 
                                href="/products" 
                                className={`transition-all duration-[400ms] ${(basePath === '/products') ? 'text-brand' : 'text-secondary'} hover:text-brand`}
                            >
                                Products
                            </Link>
                            <Link 
                                href="/contact" 
                                className={`transition-all duration-[400ms] ${(basePath === '/contact') ? 'text-brand' : 'text-secondary'} hover:text-brand`}
                            >
                                Contact
                            </Link>

                        </div>
                    </section>
                    <section className='w-full 2sm:max-w-[24.625rem] flex flex-col full text-left 2ms:mt-[1.25rem] mt-0'>
                        <h2 className='text-[1rem]/[1.25rem] text-secondary font-semibold w-full 2ms:pb-[1.5rem] pb-[.875rem]'>Contact Us</h2>
                        <div className='flex flex-col gap-[8px] 2sm:pb-[32px] pb-[1rem]'>
                            <h3 className='text-white text-[1rem]/[1.25rem]'>Work Hours</h3>
                            <p className='opacity-[.6] text-white text-[1rem]/[1.25rem] font-normal'>9am - 5pm, Mondays - Fridays</p>
                        </div>
                        <div className='flex flex-col 2sm:flex-row gap-[1rem] 2sm:gap-[1.5rem]'>
                            <div className='flex flex-col gap-[8px]'>
                                <h3 className='text-white text-[1rem]/[1.25rem]'>Address</h3>
                                <p className='opacity-[.6] text-white text-[1rem]/[1.25rem] font-normal'>25, Olusoji Idowu St., Ilupeju, Lagos.</p>
                            </div>
                            <div className='flex flex-col 3ms:flex-row 2ms:flex-col gap-[1rem]'>
                                <div className='flex flex-col gap-[8px]'>
                                    <h3 className='text-white text-[1rem]/[1.25rem]'>Email</h3>
                                    <p className='opacity-[.6] text-white text-[1rem]/[1.25rem] font-normal'>contact@trivancetech.com</p>
                                </div>
                                <div className='flex flex-col gap-[8px]'>
                                    <h3 className='text-white text-[1rem]/[1.25rem]'>Phone</h3>
                                    <p className='opacity-[.6] text-white text-[1rem]/[1.25rem] font-normal'>+234 802 346 9186</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <div className='w-full h-[1px] my-[1.25rem] bg-white opacity-[.1]'></div>
            <section className='px-[1rem] 1sm:px-[1.5rem] w-full flex'>
                <div className='mx-auto w-full max-w-[67.25rem]'>
                    <p className='w-full text-white font-normal text-[1rem]/[1.25rem] opacity-[.5] '>{`Copyright © ${currentYear} Trivance Technologies Ltd. All rights reserved.`}</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer
