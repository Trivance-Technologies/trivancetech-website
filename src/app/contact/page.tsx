import { Metadata } from "next";
import Contact from "./contact";

export const metadata: Metadata = {
    title: 'Contact Us - Trivance Technologies',
    description: "Get in touch with Trivance Technologies for expert industry solutions and consultation.",
};

export default function Page() {
    return <Contact />;
}