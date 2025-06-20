import NotFoundPage from "@/app/not-found";
import BlogCard from "@/components/blog_card";
import MarkdownContent from "@/components/markdown_content";
import { Article, getArticleBySlug, getArticlesByTag, getLatestArticles } from "@/libs/articles";
import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const temp = await Promise.resolve(params);
  const slug = temp.slug;

  const article = await getArticleBySlug(slug);

  if (!article) return { title: "Not Found", description: "Article not found" };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image],
      url: `https://trivancetech.com/blog/${article.slug}`,
      type: 'website',
      siteName: 'Trivance Technologies',
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image],
      type: 'website',
      siteName: 'Trivance Technologies',
    },
  };
}



export default async function Page ({ params }: PageProps) {
    const temp = await Promise.resolve(params);
    const slug = temp.slug;

    const article: Article | null = await getArticleBySlug(slug);
    const currentUrl = "http://localhost:3000/blog";
    const encodedUrl = encodeURIComponent(currentUrl);

    if (!article) {
        return <NotFoundPage />;
    }

    const { articleCards: rawRelatedCards } = await getArticlesByTag(article.category, 0, 5);
    let articleCards = rawRelatedCards.filter(card => card.slug !== slug);

    if (articleCards.length === 0) {
        articleCards = (await getLatestArticles()).articleCards.filter(card => card.slug !== slug);
    }

    articleCards = articleCards.slice(0, 3);

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
                    <div className="text-brand uppercase text-[1rem]/[1.25rem] font-medium tracking-[2px]">{article.category}</div>
                    <h1 className="text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold text-white tracking-[-1px] capitalize">{article.title}</h1>
                    <p className="text-white text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] font-normal opacity-[.8]">{article.description}</p>
                    <div className="flex items-center justify-center gap-[1.5rem] text-white text-[.875rem]/[1.25rem] opacity-70 mt-[1.25rem]">
                        <div className="flex items-center gap-[0.5rem]">
                            <CalendarDays size={16} className="stroke-white opacity-70" />
                            <span>{article.publishedAt}</span>
                        </div>
                        <div className="flex items-center gap-[0.5rem]">
                            <Clock size={16} className="stroke-white opacity-70" />
                            <span>{article.readTime}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full relative" style={{ paddingTop: "51.28%" }}>
                    <Image alt={`cover image for ${article.title}`} priority className="object-cover w-full" fill src={article.image} />
                </div>
            </div>
        </section> 
        <section className="bg-white px-[1rem] 1sm:px-[1.5rem] py-[3.75rem] flex justify-center">
            <div className="flex flex-col 2sm:flex-row max-auto max-w-[60rem] gap-[2rem] w-full">
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
                <div className="flex flex-col text-left text-[#171D2F] gap-[2rem] w-full">
                    <MarkdownContent content={article.content} />
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
                    {
                        articleCards.map((card) => {
                            return (
                                <BlogCard key={card.slug} slug={card.slug} image={card.image} title={card.title} category={card.category} description={card.description} publishedAt={card.publishedAt} readTime={card.readTime}/>
                            )})
                    }
                </div>
            </div>
        </section>
    </>
  )
}

