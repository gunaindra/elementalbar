import StackCard from "@/components/StackCard";

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

      <div className="mb-100px mx-10 mt-20 md:mx-0 md:mt-0">
        <StackCard />
      </div>
    </div>
  );
}

Home.title = "Home";
Home.layout = "LandingLayout";
