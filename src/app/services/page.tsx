import Services from "./services";

export async function generateMetadata() {

  return {
    title: "Business Services | Digital Transformation, Industry Automation, Documentation, Software Development & Advisory - Trivance",
    description: "From documentation to custom software, Trivance provides implementation, user training, and advisory services to drive digital transformation.",
    openGraph: {
      title: "Business Services | Digital Transformation, Industry Automation, Documentation, Software Development & Advisory - Trivance",
      description: "From documentation to custom software, Trivance provides implementation, user training, and advisory services to drive digital transformation.",
      url: `https://trivancetech.com/`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Business Services | Digital Transformation, Industry Automation, Documentation, Software Development & Advisory - Trivance",
      description: "From documentation to custom software, Trivance provides implementation, user training, and advisory services to drive digital transformation.",
    },
    alternates: {
      canonical: "https://trivancetech.com/services",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
    return <Services />;
}