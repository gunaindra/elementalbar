import Menu from "@/components/Menu";
import siteData from "@/data/site";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
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

      <Menu />
    </>
  );
}

Home.title = "Home";
Home.layout = "LandingLayout";
