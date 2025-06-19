import About from "./about";

export async function generateMetadata() {

  return {
    title: "About Trivance Technologies | ERP & Fintech Solutions for the Modern Enterprise",
    description: "We specialize in digital transformation through enterprise-grade solutions like Odoo ERP and Metafold Suite—built for operational efficiency and regulatory compliance.",
    openGraph: {
      title: "About Trivance Technologies | ERP & Fintech Solutions for the Modern Enterprise",
      description: "We specialize in digital transformation through enterprise-grade solutions like Odoo ERP and Metafold Suite—built for operational efficiency and regulatory compliance.",
      url: `https://trivancetech.com/`,
    },
    twitter: {
      card: "summary_large_image",
      title: "About Trivance Technologies | ERP & Fintech Solutions for the Modern Enterprise",
      description: "We specialize in digital transformation through enterprise-grade solutions like Odoo ERP and Metafold Suite—built for operational efficiency and regulatory compliance.",
    },
  };
}

export default function Page() {
    return <About />;
}