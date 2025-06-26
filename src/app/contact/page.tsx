import Contact from "./contact";

export async function generateMetadata() {

  return {
    title: "Contact Trivance | Speak with Our ERP & Fintech Specialists",
    description: "Reach out to Trivance Technologies for consultations on ERP, pension systems, and business automation tailored to your industry’s needs.",
    openGraph: {
      title: "Contact Trivance | Speak with Our ERP & Fintech Specialists",
      description: "Reach out to Trivance Technologies for consultations on ERP, pension systems, and business automation tailored to your industry’s needs.",
      url: `https://trivancetech.com/`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Trivance | Speak with Our ERP & Fintech Specialists",
      description: "Reach out to Trivance Technologies for consultations on ERP, pension systems, and business automation tailored to your industry’s needs.",
    },
  };
}

export default function Page() {
    return <Contact />;
}