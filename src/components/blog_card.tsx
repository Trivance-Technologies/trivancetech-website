import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  slug: string | number;
  image: string;
  title: string;
  category: string;
  description: string;
  publishedAt: string;
  readTime: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  image,
  title,
  category,
  description,
  publishedAt,
  readTime
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      key={slug}
      className="group hover:scale-105 hover:cursor-pointer transition-all bg-white overflow-hidden shadow-sm hover:shadow-md duration-300 flex flex-col h-full w-full"
    >
      <div className="relative w-full h-48 shrink-0">
        <Image src={image} alt={`cover image for ${title}`} fill className="object-cover" />
      </div>
      <div className="p-6 text-left flex flex-col h-full">
        <p className="text-xs text-[rgb(23,29,47)] mb-2">{category}</p>
        <div className="flex items-center text-xs text-[rgba(23,29,47,0.6)] mb-2 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{publishedAt}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
        <h3 className="text-[1.25rem]/[1.5rem] font-semibold mb-2 text-[#171d2f]">
          {title}
        </h3>
        <p className="text-sm text-primary opacity-[.6] mb-4 flex-grow">
          {description}
        </p>
        <div
          className="flex flex-row gap-[.375rem] items-center justify-start text-sm transition-[color] duration-[400ms] border-[2px] py-[.625rem] 2sm:py-[.875rem] px-[1.25rem] 2sm:px-[1.875rem] text-primary group-hover:text-[#5880B5] bg-transparent border-[rgba(23,29,47,0.2)] font-semibold w-fit"
        >
          Read More
          <Image
            src="/right_arrow.svg"
            alt="right arrow icon"
            width={20}
            height={21}
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
