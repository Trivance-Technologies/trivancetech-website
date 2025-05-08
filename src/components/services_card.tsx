import Image from 'next/image';
import Link from 'next/link';

interface ServicesCardData {
    iconUrl: string;
    title: string;
    description: string | null;
    isProducts: boolean;
    isHomePage: boolean;
    typesOfService: {
        name: string;
    }[] | null;
}

const ServicesCard: React.FC<ServicesCardData> = ({ iconUrl, title, description, isProducts, isHomePage, typesOfService }) => {
  return (
    <Link    
    aria-label={`Link to ${isProducts ? "product" : "service"}: ${title}`}
    href={
        isHomePage && !isProducts 
            ? "/services"
            : `/${isProducts ? "products" : "services"}/${title.toLowerCase().replace(/\s+/g, "-")}`
        }
     className={`py-[2.5rem] px-[3rem] ${isProducts ? 'bg-secondary' :  'bg-white' } flex flex-col hover:cursor-pointer group hover:bg-primary transition-[background-color] duration-[300ms]`}>
        <div className='mb-[1.25rem] flex flex-col gap-[1.875rem] justify-start items-start text-left'>
            <span 
                style={{
                    maskImage: `url('${iconUrl}')`, 
                    WebkitMaskImage: `url('${iconUrl}')`, 
                    maskSize: 'contain', 
                    maskRepeat: 'no-repeat', 
                    maskPosition: 'center'
                }}
                className='
                    h-[3.75rem] 
                    w-[3.75rem] 
                    relative 
                    bg-primary 
                    group-hover:bg-brand 
                    transition-[background-color] 
                    duration-[300ms]'
                >
            </span>
            <h4 className='text-[1.25rem]/[1.625rem] 2sm:text-[1.5rem]/[1.875rem] text-primary group-hover:text-white transition-[color] duration-[300ms] font-semibold tracking-[-1px]'>{title}</h4>
        </div>  
        <div className='flex flex-col h-full justify-between'>
            {(isHomePage && !isProducts) ? (
            <ul className='gap-[.5rem] flex flex-col'>
                {
                    typesOfService?.map((data, index) => (
                        <li key={index} className='flex flex-row gap-2 items-center'>
                            <span
                            className="w-[16px] h-[16px] flex-shrink-0 opacity-[.6] bg-primary group-hover:bg-white transition-[background-color] duration-[300ms]"
                            style={{
                                maskImage: "url('/check.svg')",
                                WebkitMaskImage: "url('/check.svg')",
                                maskSize: "contain",
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                            }}
                            ></span>
                            <p className='text-[1rem]/[1.25rem] text-primary opacity-[.6] group-hover:text-white group-hover:opacity-[.8] transition-[color,opacity] duration-[300ms]' key={index}>{data.name}</p>
                        </li>
                    ))
                }
            </ul>
            ) : (
            <p className='text-[1rem]/[1.25rem] text-primary opacity-[.6] group-hover:text-white group-hover:opacity-[.8] transition-[color,opacity] duration-[300ms]'>{description}</p>)}
            <div className='w-fit text-center text-primary font-semibold text-[.875rem]/[1.25rem] 3sm:text-[1.125rem]/[1.375rem] mt-[1.875rem] bg-transparent group-hover:bg-brand border-[2px] flex flex-row gap-[.375rem] items-center justify-start px-[1.25rem] py-[.875rem] border-[rgba(23,29,47,0.2)] group-hover:border-brand transition-[background-color,border] duration-[300ms]'>
                <p>Details</p>
                <Image
                    src="/right_arrow.svg"
                    alt="right arrow icon"
                    width={20}
                    height={21}
                />
            </div>
        </div>
    </Link>
  )
}

export default ServicesCard
