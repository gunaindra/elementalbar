// import Swiper JS
import Swiper, { Navigation, Thumbs, Autoplay, Lazy, EffectCoverflow, Pagination } from "swiper"
import "swiper/css"

class Sliders {
  constructor() {
    this.initFullSlider()
    this.initCenteredSlider()
    this.initCardSlider()
    this.initCollectionsSlider()
    this.initCardSlider3Columns()
    this.initCardSlider3ColumnsLargeGap()
    this.initCoverflowSlider()
    this.initCoverflowSlider2()
    this.initCardSlider2Columns()
    this.initSingleSlider()
  }

  initFullSlider() {
    const swiperThumbs = new Swiper(".full-slider-thumbs", {
      modules: [Thumbs, Autoplay, Lazy],
      loop: true,
      slidesPerView: 2,
      breakpoints: {
        1024: {
          slidesPerView: 3
        }
      },
      freeMode: true,
      preloadImages: false,
      lazy: true,
      watchSlidesProgress: true
    })

    const swiper = new Swiper(".full-slider", {
      modules: [Thumbs, Autoplay, Lazy],
      speed: 400,
      slidesPerView: 1,
      loop: true,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      thumbs: {
        swiper: swiperThumbs
      }
    })
  }

  initCenteredSlider() {
    const swiper = new Swiper(".centered-slider", {
      modules: [Lazy],
      speed: 400,
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 1,
      centeredSlides: true,
      breakpoints: {
        560: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        768: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 4
        },
        1280: {
          slidesPerView: 6
        }
      },
      loop: true,
      preloadImages: false,
      lazy: true
    })
  }

  initCardSlider() {
    const swiper = new Swiper(".card-slider-4-columns", {
      modules: [Navigation, Lazy],
      speed: 400,
      spaceBetween: 30,
      slidesPerView: 1,
      breakpoints: {
        560: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4
        }
      },
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1"
      }
    })
  }

  initCollectionsSlider() {
    const swiper = new Swiper(".collections-slider", {
      modules: [Navigation, Lazy],
      speed: 400,
      spaceBetween: 30,
      slidesPerView: 1,
      breakpoints: {
        560: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4
        }
      },
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2"
      }
    })
  }

  initCardSlider3Columns() {
    const swiper = new Swiper(".card-slider-3-columns", {
      modules: [Navigation, Lazy],
      speed: 400,
      spaceBetween: 16,
      slidesPerView: 1,
      breakpoints: {
        560: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3
        }
      },
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: ".swiper-button-next-3",
        prevEl: ".swiper-button-prev-3"
      }
    })
  }

  initCardSlider3ColumnsLargeGap() {
    const swiper = new Swiper(".card-slider-3-columns-large-gap", {
      modules: [Pagination, Navigation, Lazy],
      speed: 400,
      spaceBetween: 30,
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        560: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 1
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 1
        }
      },
      preloadImages: false,
      lazy: true,
      pagination: {
        el: ".swiper-pagination-1",
        type: "bullets",
        clickable: true
      }
    })
  }

  initCoverflowSlider() {
    const swiper = new Swiper(".coverflow-slider", {
      modules: [Navigation, Lazy, EffectCoverflow],
      effect: "coverflow",
      speed: 400,
      loop: true,
      spaceBetween: 20,
      centeredSlides: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 0.5,
        slideShadows: true
      },
      breakpoints: {
        560: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 5
        }
      },
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: ".swiper-button-next-4",
        prevEl: ".swiper-button-prev-4"
      }
    })
  }

  initCoverflowSlider2() {
    const swiper = new Swiper(".coverflow-slider-2", {
      modules: [Pagination, Lazy, EffectCoverflow],
      effect: "coverflow",
      speed: 400,
      loop: true,
      spaceBetween: 75,
      centeredSlides: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 50,
        modifier: 1.5,
        slideShadows: false
      },
      breakpoints: {
        560: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 5
        }
      },
      preloadImages: false,
      lazy: true,
      pagination: {
        el: ".swiper-pagination-2",
        type: "bullets",
        clickable: true
      }
    })
  }

  initCardSlider2Columns() {
    const swiper = new Swiper(".card-slider-2-columns", {
      modules: [Pagination, Lazy, Autoplay],
      speed: 400,
      loop: true,
      loopAdditionalSlides: 2,
      spaceBetween: 30,
      slidesPerView: 1,
      breakpoints: {
        560: {
          slidesPerView: 2,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 1
        }
      },
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
    })
  }

  initSingleSlider() {
    const swiper = new Swiper(".single-slider", {
      modules: [Autoplay, Navigation, Lazy],
      speed: 400,
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next-5",
        prevEl: ".swiper-button-prev-5"
      }
    })
  }
}

export default Sliders
