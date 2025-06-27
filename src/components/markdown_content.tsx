import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <article className="prose prose-indigo max-w-none w-full">
      <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkUnwrapImages]}        
          components={{
          h1: (props) => (
            <h1 className="text-[1.5rem]/[2rem] 2sm:text-[2.5rem]/[3rem] font-bold my-6" {...props} />
          ),
          h2: (props) => (
            <h2 className="text-[1.25rem]/[1.75rem] 2sm:text-[2rem]/[2.5rem] font-semibold my-5" {...props} />
          ),
          h3: (props) => (
            <h3 className="text-[1.125rem]/[1.5rem] 2sm:text-[1.75rem]/[2.25rem] font-semibold my-4" {...props} />
          ),
          h4: (props) => (
            <h4 className="text-[1rem]/[1.5rem] 2sm:text-[1.5rem]/[2rem] font-semibold my-3" {...props} />
          ),
          p: (props) => (
            <p className="text-primary text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem] my-3" {...props} />
          ),
          a: (props) => (
            <a
              className="text-indigo-600 underline hover:text-indigo-800 text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]"
              {...props}
            />
          ),
          ul: (props) => <ul className="list-disc list-inside my-4 text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" {...props} />,
          ol: (props) => <ol className="list-decimal list-inside my-4 text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" {...props} />,
          li: (props) => <li className="ml-6 mb-2 text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" {...props} />,
          blockquote: (props) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" {...props} />
          ),
          hr: () => <hr className="my-8 border-t border-gray-200 text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" />,
          table: (props) => (
            <div className="overflow-x-auto my-6">
              <table className="table-auto w-full text-left text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" {...props} />
            </div>
          ),
          thead: (props) => (
            <thead className="bg-gray-100 text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" {...props} />
          ),
          tbody: (props) => <tbody className="text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" {...props} />,
          tr: (props) => <tr className="border-b text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" {...props} />,
          th: (props) => (
            <th className="px-4 py-2 font-semibold text-sm" {...props} />
          ),
          td: (props) => (
            <td className="px-4 py-2 text-sm" {...props} />
          ),
          img: ({ src, alt }) => {
            if (typeof src !== "string") return null;
            return (
              <div
                className="my-6 w-full relative overflow-hidden"
                style={{ paddingTop: "56.25%" }}
              >
                <Image
                  src={src}
                  alt={alt ?? ""}
                  fill
                  className="object-cover"
                />
              </div>
            );
          },
          code: ({ className, children, ...props }) => {
            return <pre className="my-6 bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]">
              <code className={className} {...props}>
                {children}
              </code>
            </pre>;
          },
          del: (props) => (
            <del className="line-through opacity-70 text-[.875rem]/[1.25rem] 2sm:text-[1rem]/[1.25rem]" {...props} />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default MarkdownContent;