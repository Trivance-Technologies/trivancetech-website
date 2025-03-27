import NotFoundPage from '@/app/not-found';
import InfoSection from '@/components/info_section';
import PartnersLogosDisplay from '@/components/partners_logos_display';
import BodyHeader from '@/components/products_services_components/body_header';
import WhatItOffers from '@/components/products_services_components/what_it_offers';
import WhyItMatters from '@/components/products_services_components/why_it_matters';
import { serviceData, serviceMetadata } from '@/data/servicesData';

export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
    const temp = await Promise.resolve(params);
    const slug = temp.slug;

    if (!slug || !serviceMetadata[slug]) {
        return {
            title: "Service Not Found - Trivance Technologies",
            description: "The service you're looking for is unavailable. Check the other services from Trivance Technologies.",
        };
    }

    return serviceMetadata[slug] || {};
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
    const temp = await Promise.resolve(params);
    const slug = temp.slug;

    if (!slug) {
        return NotFoundPage();
    }

    const content = serviceData[slug as keyof typeof serviceData] || null;

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
                title={'Services'}
                subtitle={formatSlug(slug)}
                description={content.description}
                imageAlt={content.imageAlt}
             />
             <WhatItOffers 
             title={formatSlug(slug)}
             content={content.whatWeOffer}
             isProduct={false}
             />
             <WhyItMatters 
             title={formatSlug(slug)}
             description={content.fullDescription}
             />
            <InfoSection swapRow={false} showButton={false}/>
            <PartnersLogosDisplay />
        </>
    )
}

export default Page


