import { useRef } from "react";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { EffectCards } from "swiper";

import "swiper/css/effect-cards";

const listAssets = [
  { alt: "web-story", src: "/assets/images/eb-web-story.webp", href: "/story" },
  {
    alt: "web-booking",
    src: "/assets/images/eb-web-booking.webp",
    href: "/booking",
  },
  { alt: "eb-web-shop", src: "/assets/images/eb-web-shop.webp", href: "/shop" },
  {
    alt: "web-events",
    src: "/assets/images/eb-web-events.webp",
    href: "/events",
  },
];

function SwiperCarousel() {
  const router = useRouter();

  const swiperRef = useRef();

  return (
    <>
      <Swiper
        className="w-300px h-300px md:w-600px md:h-600px"
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        onClick={(swiper) => {
          router.push(listAssets[swiper.activeIndex].href);
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {listAssets.map((asset, index) => {
          return (
            <SwiperSlide itemRef={`cards-${asset.alt}`} key={asset.alt}>
              <img
                className={`image-card-${index + 1}`}
                src={asset.src}
                alt={asset.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperCarousel;
