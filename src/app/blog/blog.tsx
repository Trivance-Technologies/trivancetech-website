'use client'
import BlogCard from "@/components/blog_card";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react"; // 1. Import useMemo

interface NewsCard {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const newsCards: NewsCard[] = [
  {
    id: 1,
    category: "Career",
    title: "How to win any job you want. Get started with 5 steps.",
    description:
      "Learn how to craft an impressive resume, ace your interviews, and build a winning personal brand to land your dream job.",
    image:
      "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    category: "Lifestyle",
    title: "10+ Best ways to reduce your office work depression.",
    description:
      "Explore proven tips like mindfulness, social connections, and healthy habits to combat stress and burnout in the workplace.",
    image:
      "https://images.unsplash.com/photo-1500099817043-86d46000d58f?auto=format&fit=crop&w=1374&q=80",
  },
  {
    id: 3,
    category: "Career",
    title: "Why should you work as a team even on small projects.",
    description:
      "Discover how teamwork fosters creativity, builds morale, and increases productivity, even on the smallest of tasks.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    category: "Health",
    title: "The secret to a healthier lifestyle starts here.",
    description:
      "Unlock the power of balanced nutrition, regular exercise, and mindfulness for a happier, healthier you.",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    category: "Travel",
    title: "Explore the world: Top 10 destinations for 2025.",
    description:
      "From exotic beaches to bustling cities, discover the must-see destinations on your travel bucket list.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 9,
    category: "Lifestyle",
    title: "Minimalism: Simplify your life and live with purpose.",
    description:
      "Learn how to declutter your space, your mind, and your life for a more meaningful existence.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 13,
    category: "Travel",
    title: "Sustainable tourism: Travel responsibly.",
    description:
      "Discover how to minimize your environmental impact while exploring new places.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 14,
    category: "Career",
    title: "Networking: Building professional relationships.",
    description:
      "Unlock opportunities by connecting with professionals in your industry.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 15,
    category: "Lifestyle",
    title: "Work-life balance: Achieving harmony.",
    description:
      "Strategies to balance your professional and personal life effectively.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 16,
    category: "Technology",
    title: "Cybersecurity: Protecting your digital life.",
    description:
      "Tips to safeguard your personal information online.",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 17,
    category: "Health",
    title: "Nutrition: Eating for optimal health.",
    description:
      "Understand the importance of a balanced diet and how to achieve it.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 19,
    category: "Travel",
    title: "Cultural immersion: Traveling beyond tourism.",
    description:
      "Engage deeply with local cultures for a richer travel experience.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 20,
    category: "Career",
    title: "Leadership skills: Leading with confidence.",
    description:
      "Develop essential leadership qualities to inspire and guide your team.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60",
  },
];

const tags = ["All Posts", "Career", "Lifestyle", "Health", "Technology", "Finance", "Travel"];


const Blog = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchTag, setSearchTag] = useState<string>("All Posts");

  const filteredCards = useMemo(() => {
    return newsCards.filter((card) => {
      const tagMatch = searchTag === "All Posts" || card.category === searchTag;
      const searchMatch =
        searchValue.trim() === "" ||
        card.title.toLowerCase().includes(searchValue.trim().toLowerCase());
      return tagMatch && searchMatch;
    });
  }, [searchValue, searchTag]);

  return (
    <section className="w-full py-[6.25rem] px-[1.5rem] flex flex-col items-center bg-secondary">
      <div className="flex flex-col mx-auto w-full max-w-[67.25rem] items-center">
        <h2 className="self-start uppercase tracking-[2px] font-medium text-[.875rem]/[1.25rem] 3sm:text-[1rem]/[1.25rem] opacity-[.6] text-primary mb-[4rem]">Search Our Blog Library</h2>
        <div className="flex flex-wrap gap-2 self-start">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 hover:cursor-pointer text-sm font-medium text-gray-700 uppercase tracking-wide hover:bg-gray-100 ${(searchTag === tag) ? 'border border-gray-400' : ''}`}
              onClick={() => { setSearchTag(tag); }}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="w-full flex items-center border border-gray-300 px-4 py-2 bg-white self-start my-[1.5rem]">
          <span 
            className="mr-2 text-gray-500"
          >
            <Search className="w-5 h-5" />
          </span>
          <input 
            type="text" 
            placeholder="Search for posts..."
            aria-label="Search posts"
            onChange={(e) => { setSearchValue(e.target.value) }}
            value={searchValue}
            className="flex-grow bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
          />
          <button 
            className={`mr-2 text-red-500 hover:cursor-pointer ${(searchValue.trim() === "") ? "hidden" : "block"}`}
            aria-label = "clear search"
            onClick={() => setSearchValue("")}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="w-fit grid grid-cols-1 3sm:grid-cols-2 1sm:grid-cols-3 gap-[2.5rem] justify-around">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <BlogCard
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                category={card.category}
                description={card.description}
              />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 py-10">
              No posts found matching your search.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Blog;