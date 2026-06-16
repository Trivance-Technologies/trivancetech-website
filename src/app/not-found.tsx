import { Metadata } from "next";
import NotFound from "@/components/not_found";

export function generateMetadata(): Metadata {
  return {
    title: "Page Not Found - Trivance Technologies",
    description: "The page you're looking for doesn't exist. Explore our ERP, fintech, and digital transformation solutions.",
    alternates: {
      canonical: "https://trivancetech.com",
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function NotFoundPage() {
  return <NotFound />;
}
