import { useRef, useState } from "react";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { EffectCards, Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css/effect-cards";
import Link from "next/link";

const listAssets = [
  {
    alt: "web-story",
    src: "/assets/images/eb-web-story.webp",
    href: "/story",
    title: "Story",
  },
  {
    alt: "web-booking",
    src: "/assets/images/eb-web-booking.webp",
    href: "/booking",
    title: "Booking",
  },
  {
    alt: "eb-web-shop",
    src: "/assets/images/eb-web-shop.webp",
    href: "/shop",
    title: "Shop",
  },
  {
    alt: "web-events",
    src: "/assets/images/eb-web-events.webp",
    href: "/events",
    title: "Events",
  },
];

function SwiperCarousel() {
  const router = useRouter();

  const swiperRef = useRef();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      console.log("swiperRef", swiperRef.current);
      swiperRef.current.autoplay.start();
    }
  };
  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  return (
    <>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          className="w-300px h-300px md:w-600px md:h-600px"
          effect={"cards"}
          followFinger={true}
          grabCursor={false}
          onActiveIndexChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          modules={[EffectCards, Autoplay, Pagination, Navigation]}
          onClick={(swiper) => {
            router.push(listAssets[swiper.activeIndex].href);
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 500,
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
          <h6 className="text-center text-menu mt-5 underline decoration-2 underline-offset-4 text-black ">
            <Link href={listAssets[activeIndex].href}>
              {listAssets[activeIndex].title}
            </Link>
          </h6>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperCarousel;