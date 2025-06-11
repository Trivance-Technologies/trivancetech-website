import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  id: string | number;
  image: string;
  title: string;
  category: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  title,
  category,
  description,
}) => {
  return (
    <div
      key={id}
      className="hover:scale-105 transition-all bg-white overflow-hidden shadow-sm hover:shadow-md duration-300 flex flex-col h-full w-full"
    >
      <div className="relative w-full h-48 shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 text-left flex flex-col h-full">
        <p className="text-xs text-[rgb(23,29,47)] mb-2">{category}</p>
        <h3 className="text-[1.25rem]/[1.5rem] font-semibold mb-2 text-[#171d2f]">
          {title}
        </h3>
        <p className="text-sm text-primary opacity-[.6] mb-4 flex-grow">
          {description}
        </p>
        <Link
          href="/blog/"
          className="flex flex-row gap-[.375rem] items-center justify-start text-sm transition-[background-color,color] duration-[400ms] border-[2px] hover:bg-transparent py-[.625rem] 2sm:py-[.875rem] px-[1.25rem] 2sm:px-[1.875rem] text-primary hover:text-[#5880B5] bg-transparent border-[rgba(23,29,47,0.2)] font-semibold w-fit"
        >
          READ MORE
          <Image
            src="/right_arrow.svg"
            alt="right arrow icon"
            width={20}
            height={21}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
