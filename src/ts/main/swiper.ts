import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

const swiper: Swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 0.35,
    eventsTarget: ".swiper",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  speed: 500,
  spaceBetween: "50px",
  observeSlideChildren: true,
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  slidesPerGroup: 2,
  freeMode: true,
});
