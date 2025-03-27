import { Metadata } from "next";
import Services from "./services";

export const metadata: Metadata = {
    title: 'Our Services - Trivance Technologies',
    description: "Explore our wide range of services designed to streamline your business processes, improve efficiency, and drive growth.",
  };

export default function Page() {
    return <Services />;
}