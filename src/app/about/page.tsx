import { Metadata } from "next";
import About from "./about";

export const metadata: Metadata = {
    title: 'About Us - Trivance Technologies',
    description: "Trivance Technologies is an Odoo Partner, providing industry-specific solutions to organizations.",
};

export default function Page() {
    return <About />;
}