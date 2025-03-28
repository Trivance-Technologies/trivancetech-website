import Link from 'next/link';

interface KnowMoreCardTypes {
    text: string;
}

const KnowMoreCard: React.FC<KnowMoreCardTypes> = ({ text }) => {
  return (
    <section className='w-full py-[2.5rem] bg-primary overflow-hidden'>
      <div className='w-full px-[1.5rem]'>
          <div className='w-full flex flex-col max-w-[67.25rem] mx-auto justify-center items-center gap-[1rem] 1sm:gap-[1.25rem]'> 
              <p className='text-center max-w-[16rem] 3sm:max-w-[49rem] w-full text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold text-white'>{text}</p>
              <Link href='/contact' className='transition-all duration-[400ms] border-[2px] hover:bg-transparent py-[.625rem] 2sm:py-[.875rem] px-[1.25rem] 2sm:px-[1.875rem] text-[1.125rem]/[1.375rem] my-auto text-black hover:text-brand bg-brand border-brand font-semibold w-fit'>
                  Get in touch
              </Link>
          </div>
      </div>
    </section>
  )
}

export default KnowMoreCard
