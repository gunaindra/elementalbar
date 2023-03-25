import React from "react";

import siteData from "@/data/site";
import { NextSeo } from "next-seo";

import { InstagramGallery } from "instagram-gallery";

export default function Feed() {
  return (
    <div className="min-h-screen relative sm:px-0 md:px-250px ">
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

      <div className="md:container md:mx-auto text-center">
        <div className="text-center mb-5">
          <h1 className="text-heading">Stay Connected With Our Events!</h1>
          <p>Through our official social media on instagram</p>
        </div>

        <InstagramGallery accessToken={process.env.ACCESS_TOKEN} count={24}/>
      </div>
    </div>
  );
}

Feed.title = "Feed";
Feed.layout = "LandingLayout";
