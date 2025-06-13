import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <article className="prose prose-indigo max-w-none">
      <ReactMarkdown
            components={{
            h1: (props) => <h1 className="text-4xl font-bold my-4" {...props} />,
            h2: (props) => <h2 className="text-3xl font-semibold my-3" {...props} />,
            h3: (props) => <h3 className="text-2xl font-semibold my-2" {...props} />,
            p: (props) => <p className="my-2" {...props} />,
            strong: (props) => <strong className="font-bold" {...props} />,
            ul: (props) => <ul className="list-disc list-inside my-2" {...props} />,
            li: (props) => <li className="ml-4" {...props} />,
            img: ({ src, alt,}) => {
            // src and alt are passed in props by ReactMarkdown
            if (typeof src !== "string") {
              return null;
            }
            return (
              <div className="my-4 rounded-lg overflow-hidden max-w-full">
                <Image
                  src={src}
                  alt={alt ?? ""}
                  fill
                  className="rounded-lg"
                />
              </div>
            );
            },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default MarkdownContent;
