import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Example() {
  const [swipers, setSwipers] = useState([
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
  ]);

  const addSwiper = (swiper) => {
    setSwipers((prevSwipers) => prevSwipers.concat(swiper));
  };

  return (
    <div style={{zIndex: 1000}}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {swipers.map((swiper, index) => (
          <SwiperSlide key={index}>{swiper}</SwiperSlide>
        ))}
      </Swiper>
      <br />
      <br />
      <br />
      <button
        className="w-200px bg-darkGrey mt-20"
        onClick={() => addSwiper("Add Swiper Card 1")}
      >
        Add Swiper Card 1 (Click on this to Add)
      </button>{" "}
      <br />
      <button
        className="w-200px bg-darkGrey mt-20"
        onClick={() => {
            alert('2')
          addSwiper("Add Swiper Card 2");
        }}
      >
        Add Swiper Card 2 (Click on this to Add)
      </button>
    </div>
  );
}
