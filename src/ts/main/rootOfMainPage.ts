import { Elem } from "../universal/types/Elem";
import { Root } from "../universal/types/Root";

export const root: Root = {
  mainLink: document.querySelector(".header-nav__link_films") as Elem,
  popularSlider: document.querySelector(".swiper") as Elem,
  mostPopularFilm: {
    name: document.querySelector(".most-popular__film-name") as Elem,
    img: document.querySelector(".most-popular__img") as Elem,
    rating: document.querySelector(".most-popular-rating") as Elem,
    ratingValue: document.querySelector(".most-popular-rating__value") as Elem,
    ratingStar: document.querySelector(".most-popular-rating__active") as Elem,
    text: document.querySelector(".most-popular__text") as Elem,
  },
};
