interface PastClientLogoDetails {
    logo: logoDetails;
}

export interface logoDetails{
    height: number;
    url: string;
    width: number;
    alternativeText: string;
}

export async function retrieveClientLogos () {
    const query = new URLSearchParams({
        populate: "logo"
    }).toString();

    const res = await fetch(`${process.env.STRAPI_URL}/api/past-clients-logo?${query}`, {
        cache: "no-store",
    });

    const json = await res.json();
    const clientLogos = (json.data as PastClientLogoDetails[]).map((item) => {
        return {
            width: item.logo.width,
            height: item.logo.height,
            url: item.logo.url,
            alternativeText: item.logo.alternativeText
        };
    });

    return clientLogos;
}