import { Elem } from "../universal/types/Elem";
import { Root } from "../universal/types/Root";

export const root: Root = {
  genresTypesList: document.querySelector(".genres__list") as Elem,
  genresMoviesBlock: document.querySelector(".genres__movies") as Elem,
  headerGenresLink: document.querySelector(".header-nav__link__genres") as Elem,
  scrollToTopBtn: document.querySelector(".genres-btn-up") as Elem,
  BtnTopProgressLine: document.querySelector(".genres-btn-up__line") as Elem,
};
