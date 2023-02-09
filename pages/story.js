import { useEffect, useState, createRef } from "react";

import siteData from "@/data/site";
import { NextSeo } from "next-seo";

import { TransitionGroup } from "react-transition-group";

import { CSSTransition } from "react-transition-group";

export default function Story() {
  const [isMounted, setIsMounted] = useState(false);

  const nodeRef = createRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative sm:px-0 w-screen md:px-250px ">
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

      <div className="md:container md:mx-auto px-5">
        <div className="mb-5">
          <h1 className="text-heading text-center">Story</h1>
        </div>

        <TransitionGroup className="sm:block md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <CSSTransition
            in={isMounted}
            appear
            unmountOnExit
            ref={nodeRef}
            timeout={200}
            classNames={`story-text`}
          >
            <div className="story-text ">
              <div className="flex justify-between items-center pb-4 md:hidden">
                <div className="w-3/5 h-200px">
                  <img src="/assets/images/story-invitation.png" alt="story" />
                </div>

                <div className="w-2/5 text-right">
                  <p className="sm:mb-1 md:mb-5 text-sm">
                    <span className="drop-cap">A</span> hidden portal to a realm
                    of flavor, crafts, traditions and heritage. Carefully
                    crafted and curated beverages, from customized cocktail to
                    natural wines, and delicate dishes will take you on a
                    journey through tastes, ingredients and culture.
                  </p>
                </div>
              </div>

              <div className="block md:hidden ">
                <p className="text-sm pb-2 mb-5">
                  <span className="drop-cap">Our </span> seasoned mixologists,
                  chefs, brewers and curators will serve an array of rare
                  crafted drinks and dishes accompanied by a  crisp story
                  of the ingredients and the history behind each course. 
                  The experience is designed to indulge you with thrilling
                  servings  and a glimpse in the history and culture
                  behind the recipes.
                </p>

                <p className="text-sm pb-2 mb-5">
                  <span className="drop-cap">The</span> themes evolve regularly,
                  offering a diverse pallet of drinks, dishes,
                  experiences and anecdotes.
                </p>
              </div>

              <div className="hidden md:grid md:grid-cols-12 md:gap-1">
                <div className="col-span-4 flex justify-center items-center">
                  <img src="/assets/images/story-invitation.png" alt="story" />
                </div>
                <div className="col-span-8 text-end">
                  <div className="text-sm pb-2">
                    <p className="mb-2 text-sm">
                      <span className="drop-cap">A</span> hidden portal to a
                      realm of flavor, crafts, traditions and heritage. <br />
                      Carefully crafted and curated beverages, from customized
                      cocktail to <br /> natural wines, and delicate dishes will
                      take you on a journey through <br /> tastes, ingredients
                      and culture.
                    </p>
                  </div>

                  <p className="sm:mb-2 md:mb-2 sm:text-sm md:text-sm pb-2">
                    <span className="drop-cap">Our</span> seasoned mixologists,
                    chefs, brewers and curators will serve an array of rare
                    crafted drinks and dishes accompanied by a <br /> crisp
                    story of the ingredients and the history behind each course.{" "}
                    <br />
                    The experience is designed to indulge you with thrilling
                    servings <br /> and a glimpse in the history and culture
                    behind the recipes.
                  </p>

                  <p className="sm:mb-2 md:mb-2 sm:text-sm md:text-sm pb-2">
                    <span className="drop-cap">The</span> themes evolve
                    regularly, offering a diverse pallet <br /> of drinks,
                    dishes, experiences and anecdotes.
                  </p>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

Story.title = "Home";
Story.layout = "LandingLayout";
