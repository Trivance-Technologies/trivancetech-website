import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface StrapiImageData {
  attributes: {
    url: string;
  };
}

interface StrapiArticleAttributes {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: {
    data: StrapiImageData | null;
  };
}

interface StrapiArticle {
  id: number;
  attributes: StrapiArticleAttributes;
}

interface NewsCard {
    id: number;
    slug: string;
    category: string;
    title: string;
    description: string;
    image: string;
}

async function getArticles(): Promise<NewsCard[]> {
  const res = await fetch("http://localhost:1337/api/articles", {
    cache: "no-store", // ensures SSR-like behavior
  });

  const json = await res.json();

  console.log("📦 Strapi Response:\n", JSON.stringify(json, null, 2));

//   const newsCards = json.data.map((item: StrapiArticle) => ({
//     id: item.id,
//     slug: item.attributes.slug,
//     category: item.attributes.category,
//     title: item.attributes.title,
//     description: item.attributes.description,
//     image: item.attributes.image?.data
//       ? "http://localhost:1337" + item.attributes.image.data.attributes.url
//       : "",
//   }));

  return [];
}

export default async function Page () {
    await getArticles();
    // const [currentUrl, setCurrentUrl] = useState("");

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         setCurrentUrl(window.location.href);
    //         console.log(currentUrl);
    //     }
    // }, [currentUrl]);

    const currentUrl = "http://localhost:3000/blog";

    const encodedUrl = encodeURIComponent(currentUrl);

  return (
    <>
        <section className="bg-primary relative overflow-hidden pt-[4.599375rem] 3sm:pt-[6rem] 1sm:pt-[11.25rem] pb-[2rem] 1sm:pb-[3.75rem] px-0 1sm:px-[1.5rem]">
            {/* Blue Blur - Top Left */}
            <div className="absolute top-[-15%] left-[-10%] w-[min(40vw,400px)] h-[min(100vh,1000px)] bg-glow opacity-30 rounded-full blur-[150px] rotate-[-27.4933deg]" />
            {/* Blue Blur - Bottom Right */}
            <div className="absolute bottom-[-15%] right-[-10%] w-[min(40vw,400px)] h-[min(100vh,1000px)] bg-glow opacity-30 rounded-full blur-[150px]" />
            {/* Large Central Blur */}
            <div className="absolute bottom-[-10%] left-[50%] translate-x-[-50%] w-[min(70vw,800px)] h-[min(70vw,800px)] bg-glow opacity-30 rounded-full blur-[200px] rotate-[10deg]"/>
            <div className="flex 1sm:flex-col flex-col-reverse mx-auto max-w-[67.25rem] items-center w-full gap-[2.25rem] 2sm:gap-[3.75rem] 1sm:gap-[4rem] mb-[2rem] 2sm:mb-[4rem]">
                <div className="flex flex-col max-w-[51.625rem] mx-auto gap-[.5rem] text-center 1sm:px-0 px-[1rem]">
                    <div className="text-brand uppercase text-[1rem]/[1.25rem] font-medium tracking-[2px]">Career</div>
                    <h1 className="text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold text-white tracking-[-1px] capitalize">The secret to a healthier lifestyle starts here</h1>
                    <p className="text-white text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] font-normal opacity-[.8]">Unlock the power of balanced nutrition, regular exercise, and mindfulness for a happier, healthier you.</p>
                    <div className="flex items-center justify-center gap-[1.5rem] text-white text-[.875rem]/[1.25rem] opacity-70 mt-[1.25rem]">
                        <div className="flex items-center gap-[0.5rem]">
                            <CalendarDays size={16} className="stroke-white opacity-70" />
                            <span>June 13, 2025</span>
                        </div>
                        <div className="flex items-center gap-[0.5rem]">
                            <Clock size={16} className="stroke-white opacity-70" />
                            <span>4 min read</span>
                        </div>
                    </div>
                </div>
                <div className="w-full relative" style={{ paddingTop: "51.28%" }}>
                    <Image alt={`cover image for`} priority className="object-cover w-full" fill src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=60" />
                </div>
            </div>
        </section> 
        <section className="bg-white px-[1rem] 1sm:px-[1.5rem] py-[3.75rem] flex justify-center">
            <div className="flex flex-col 2sm:flex-row max-auto max-w-[48rem] gap-[2rem]">
                <div
                    aria-label="Share buttons"
                    className="
                        flex flex-row 2sm:flex-col gap-4 h-fit
                        p-2
                        z-50
                    "
                    >
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on Facebook"
                        className="
                        flex items-center justify-center
                        w-10 h-10
                        bg-white rounded-full
                        shadow
                        cursor-pointer
                        hover:bg-blue-100
                        transition-colors duration-200
                        "
                    >
                        <FaFacebook size={24} color="#002147" />
                    </a>
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on LinkedIn"
                        className="
                        flex items-center justify-center
                        w-10 h-10
                        bg-white rounded-full
                        shadow
                        cursor-pointer
                        hover:bg-blue-100
                        transition-colors duration-200
                        "
                    >
                        <FaLinkedin size={24} color="#002147" />
                    </a>
                    <a
                        href={`https://api.whatsapp.com/send?text=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on WhatsApp"
                        className="
                        flex items-center justify-center
                        w-10 h-10
                        bg-white rounded-full
                        shadow
                        cursor-pointer
                        hover:bg-green-100
                        transition-colors duration-200
                        "
                    >
                        <FaWhatsapp size={24} color="#002147" />
                    </a>
                </div>
                <div className="flex flex-col text-left text-[#171D2F] gap-[2rem]">
                    {/* <MarkdownContent content={markdownString} /> */}
                </div>
            </div>
        </section>   
        <section className="w-full bg-secondary px-[1rem] 1sm:px-[1.5rem] py-[3.75rem]">
            <div className="mx-auto max-w-[67.25rem] flex flex-col gap-[2.5rem]">
                <div className="flex flex-col 2sm:flex-row justify-between w-full gap-[1.25rem]">
                    <div className="flex flex-col gap-[1.25rem]">
                        <h3 className="self-start uppercase tracking-[2px] font-medium text-[.875rem]/[1.25rem] 3sm:text-[1rem]/[1.25rem] opacity-[.6] text-primary">Industry Insights</h3>
                        <h4 className="self-start text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold trackin-[-1px] text-primary max-w-[500px]">Strategic Knowledge for the Modern Enterprise</h4>
                    </div>
                    <Link href="/blog" className="self-start 2sm:self-end px-[1.5rem] py-[.5rem] border-[2px] border-primary text-primary hover:text-brand hover:border-primary hover:bg-primary bg-transparent transition-[border-color,color,background-color] duration-[400ms]">
                        See More
                    </Link>
                </div>
                <div className="grid grid-cols-1 3sm:grid-cols-2 2sm:grid-cols-3 gap-[1.25rem] 1sm:gap-[2.5rem]">
                    {/* {
                        newsCards.map((card) => {
                            return (
                                <BlogCard key={card.slug} slug={card.slug} image={card.image} title={card.title} category={card.category} description={card.description}/>
                            )})
                    } */}
                </div>
            </div>
        </section>
    </>
  )
}


// export async function getServerSideProps(context) {
//   // Fetch articles from your local Strapi instance
//   const res = await fetch("http://localhost:1337/api/articles?populate=image");
//   const json = await res.json();

//   // Format the articles to match your NewsCard type
//   const newsCards = json.data.map((item: any) => ({
//     id: item.id,
//     slug: item.attributes.slug,
//     category: item.attributes.category,
//     title: item.attributes.title,
//     description: item.attributes.description,
//     image: item.attributes.image?.data
//       ? "http://localhost:1337" + item.attributes.image.data.attributes.url
//       : "",
//   }));

//   // Build current URL from request headers (optional)
//   const protocol = context.req.headers["x-forwarded-proto"] || "http";
//   const host = context.req.headers.host;
//   const currentUrl = `${protocol}://${host}${context.req.url}`;

//   return {
//     props: {
//       newsCards,
//       currentUrl,
//     },
//   };
// }

