import BlogCard from "./blog_card";


interface NewsCard {
  slug: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const newsCards: NewsCard[] = [
    {
        slug: 1,
        category: "Career",
        title: "How to win any job you want. Get started with 5 steps.",
        description:
        "Learn how to craft an impressive resume, ace your interviews, and build a winning personal brand to land your dream job.",
        image:
        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        slug: 2,
        category: "Lifestyle",
        title: "10+ Best ways to reduce your office work depression.",
        description:
        "Explore proven tips like mindfulness, social connections, and healthy habits to combat stress and burnout in the workplace.",
        image:
        "https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        slug: 3,
        category: "Career",
        title: "Why should you work as a team even on small projects.",
        description:
        "Discover how teamwork fosters creativity, builds morale, and increases productivity, even on the smallest of tasks.",
        image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
];

const BlogDisplay = () => {
  return (
    <section className="w-full py-[3.75rem] overflow-hidden bg-secondary flex flex-col px-[1rem] 1sm:px-[1.5rem]">
        <div className="flex flex-col w-full max-w-[67.25rem] mx-auto items-center">
            <h2 className="text-primary tracking-[2px] font-medium text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] uppercase mb-[1.25rem]">Blog</h2> 
            <h3 className="text-primary trackin-[-1px] text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-semibold mb-[3.5rem]">Explore Our Latest Blog Posts</h3>  
            <div className="w-fit grid grid-cols-1 3sm:grid-cols-2 2sm:grid-cols-3 gap-[1.25rem] 1sm:gap-[2.5rem]">
                {
                    newsCards.map((card) => {
                        return (
                            <BlogCard key={card.slug} slug={card.slug} image={card.image} title={card.title} category={card.category} description={card.description}/>
                        )})
                }
            </div> 
        </div>
    </section>
  )
}

export default BlogDisplay
