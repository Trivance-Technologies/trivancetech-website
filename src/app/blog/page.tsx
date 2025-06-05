import { Metadata } from "next";
import Blog from "./blog";

export const metadata: Metadata = {
    title: 'Blog - Trivance Technologies',
    description: "Stay updated with Trivance Technologies' insights on Odoo solutions, industry trends, and expert tips to transform your business with our tailored technology solutions.",
};

export default function Page() {
    return <Blog />;
}