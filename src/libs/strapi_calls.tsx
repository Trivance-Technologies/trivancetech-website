import { fetchWithRetry } from "./articles";

interface PastClientLogoDetails {
    logo: logoDetails;
}

export interface logoDetails{
    height: number;
    url: string;
    width: number;
    alternativeText: string;
}

export async function retrieveClientLogos(): Promise<logoDetails[]> {
    try {
      const query = new URLSearchParams({
        populate: "logo"
      }).toString();
  
      const res = await fetchWithRetry(`${process.env.STRAPI_URL}/api/past-clients-logo?${query}`);
      const json = await res.json();
  
      const clientLogos = (json.data as PastClientLogoDetails[]).map((item) => ({
        width: item.logo.width,
        height: item.logo.height,
        url: item.logo.url,
        alternativeText: item.logo.alternativeText
      }));
  
      return clientLogos;
    } catch (err) {
      console.error("Error fetching client logos:", err);
      return [];
    }
}
  