import React from "react";

import siteData from "@/data/site";
import { NextSeo } from "next-seo";

export default function Feed() {
  return (
    <div className="min-h-screen relative px-250px">
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

      <div className="md:container md:mx-auto">
        <div className="text-center mb-5">
          <h1 className="text-heading">Stay Connected With Us!</h1>
          <p>Through our official social media on instagram</p>
        </div>


      </div>
    </div>
  );
}

Feed.title = "Feed";
Feed.layout = "LandingLayout";
