import NotFoundPage from "@/app/not-found";
import InfoSection from "@/components/info_section";
import PartnersLogosDisplay from "@/components/partners_logos_display";
import BodyHeader from "@/components/products_services_components/body_header";
import WhatItOffers from "@/components/products_services_components/what_it_offers";
import WhyItMatters from "@/components/products_services_components/why_it_matters";
import { productData, productMetadata } from "@/data/productsData";

export async function generateStaticParams() {
    return Object.keys(productData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
    const temp = await Promise.resolve(params);
    const slug = temp.slug;
    
    if (!slug || !productMetadata[slug]) {
        return {
            title: "Product Not Found - Trivance Technologies",
            description: "The product you're looking for is unavailable. Discover other powerful solutions from Trivance Technologies.",
        };
    }

    return productMetadata[slug] || {};
}


interface PageProps {
    params: Promise<{ slug: string }>;
}

const Product = async ({ params }: PageProps) => {
    const temp = await Promise.resolve(params);
    const slug = temp.slug

    if (!slug) {
        return NotFoundPage();
    }

    const content = productData[slug as keyof typeof productData] || null;

    if (!content) {
        return NotFoundPage();
    }

    const formatSlug = (slug: string) => slug.replace(/-/g, " ");

    return (
        <>
            <BodyHeader
                imageUrl={content.imageUrl}
                imageHeight={content.height}
                imageWidth={content.width}
                title="Products"
                subtitle={formatSlug(slug)}
                description={content.description}
                imageAlt={content.imageAlt}
            />
            <WhatItOffers 
                title={formatSlug(slug)}
                content={content.whatWeOffer}
                isProduct={true}
            />
            <WhyItMatters 
                title={formatSlug(slug)}
                description={content.fullDescription}
            />
            <InfoSection swapRow={false} showButton={false} />
            <PartnersLogosDisplay />
        </>
    );
};

export default Product;
