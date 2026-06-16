import Products from "./products";

export async function generateMetadata() {

  return {
    title: "Enterprise Software Products | Odoo ERP, Metafold Pension, Accounting & More",
    description: "Explore our suite of solutions including Odoo ERP, Metafold Pension, Metafold Accounting, and Investment tools—built for compliance-heavy industries.",
    openGraph: {
      title: "Enterprise Software Products | Odoo ERP, Metafold Pension, Accounting & More",
      description: "Explore our suite of solutions including Odoo ERP, Metafold Pension, Metafold Accounting, and Investment tools—built for compliance-heavy industries.",
      url: `https://trivancetech.com/`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Enterprise Software Products | Odoo ERP, Metafold Pension, Accounting & More",
      description: "Explore our suite of solutions including Odoo ERP, Metafold Pension, Metafold Accounting, and Investment tools—built for compliance-heavy industries.",
    },
    alternates: {
      canonical: "https://trivancetech.com/products",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
    return <Products />;
}