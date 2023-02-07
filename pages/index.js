import StackCard from "@/components/StackCard";

import siteData from "@/data/site";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { useAppContext } from "@/contexts/AppContext";

export default function Home() {
  const { card: cardContext } = useAppContext();

  return (
    <div className="relative">
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

      <div className="mb-300px mx-10 md:mx-0 ">
        <StackCard />
      </div>

      {cardContext?.activeCard?.title && cardContext?.activeCard?.onHover ? (
        <div
          className={`z-30 mr-70px invisible hidden md:visible md:block text-end ${
            cardContext?.activeCard?.onHover
              ? "sticky-bottom absolute mb-10 "
              : ""
          }`}
        >
          <Link
            className="text-menu mb-2 text-brown underline decoration-2 underline-offset-4"
            href={cardContext?.activeCard?.href}
          >
            {cardContext?.activeCard?.title}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

Home.title = "Home";
Home.layout = "LandingLayout";
