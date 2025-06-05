import BlogCard from "@/components/blog_card";

const newsCards = [
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
    id: 4,
    category: "Technology",
    title: "Top 5 AI trends that will reshape your industry.",
    description:
      "Stay ahead of the curve with insights on how artificial intelligence is transforming businesses worldwide.",
    image:
      "https://images.unsplash.com/photo-1581090700227-0a6c40b5c9c0?auto=format&fit=crop&w=800&q=60",
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
    id: 6,
    category: "Finance",
    title: "How to budget effectively in today’s economy.",
    description:
      "Master the art of budgeting, saving, and investing to secure your financial future.",
    image:
      "https://images.unsplash.com/photo-1581093588401-b54ee30844a5?auto=format&fit=crop&w=800&q=60",
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
    id: 8,
    category: "Career",
    title: "Remote work: How to stay productive and balanced.",
    description:
      "Find out how to stay focused, avoid burnout, and thrive while working from home.",
    image:
      "https://images.unsplash.com/photo-1581091228709-8aa2b6e3bd6d?auto=format&fit=crop&w=800&q=60",
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
    id: 10,
    category: "Technology",
    title: "The future of electric vehicles: What you need to know.",
    description:
      "Discover how EVs are revolutionizing transportation and what it means for consumers and the planet.",
    image:
      "https://images.unsplash.com/photo-1579487787933-4bc2a1b94e0d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 11,
    category: "Health",
    title: "Mindfulness: A path to mental well-being.",
    description:
      "Explore techniques to stay present and reduce stress in your daily life.",
    image:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 12,
    category: "Finance",
    title: "Investing 101: Building your financial portfolio.",
    description:
      "Learn the basics of investing and how to grow your wealth over time.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?auto=format&fit=crop&w=800&q=60",
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
    id: 18,
    category: "Finance",
    title: "Retirement planning: Securing your future.",
    description:
      "Steps to ensure a comfortable and financially stable retirement.",
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7e3a8b8c6b?auto=format&fit=crop&w=800&q=60",
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

const Blog = () => {
  return (
    <section className="w-full py-[6.25rem] px-[1.5rem] flex flex-col items-center bg-secondary">
      <div className="w-fit grid grid-cols-3 gap-[2.5rem] items-center">
        {
          newsCards.map((card) => {
            return (
              <BlogCard key={card.id} id={card.id} image={card.image} title={card.title} category={card.category} description={card.description}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default Blog
