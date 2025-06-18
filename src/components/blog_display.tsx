import { ArticleCard } from "@/libs/articles";
import BlogCard from "./blog_card";

interface BlogDisplayProps {
  articleCards: ArticleCard[];
}

const BlogDisplay = ({ articleCards }: BlogDisplayProps) => {
  return (
    <section className="w-full py-[3.75rem] overflow-hidden bg-secondary flex flex-col px-[1rem] 1sm:px-[1.5rem]">
        <div className="flex flex-col w-full max-w-[67.25rem] mx-auto items-center">
            <h2 className="text-primary tracking-[2px] font-medium text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] uppercase mb-[1.25rem]">Blog</h2> 
            <h3 className="text-primary trackin-[-1px] text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold mb-[3.5rem]">Explore Our Latest Blog Posts</h3>  
            <div className="w-fit grid grid-cols-1 3sm:grid-cols-2 2sm:grid-cols-3 gap-[1.25rem] 1sm:gap-[2.5rem]">
                {
                    articleCards.map((card) => {
                        return (
                            <BlogCard key={card.slug} slug={card.slug} image={card.image} title={card.title} category={card.category} description={card.description} publishedAt={card.publishedAt} readTime={card.readTime}/>
                        )})
                }
            </div> 
        </div>
    </section>
  )
}

export default BlogDisplay
