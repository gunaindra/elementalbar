import SwiperCard from "@/components/SwiperCard";
import siteData from "@/data/site";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <NextSeo
        title={siteData.siteName}
        description={siteData.description}
        openGraph={{
          type: "website",
          title: siteData.siteName,
          description: siteData.description,
          url: process.env.BASE_URL,
          site_name: siteData.siteName,
        }}
      />

      <SwiperCard />
    </div>
  );
}

Home.title = "Home";
Home.layout = "LandingLayout";
