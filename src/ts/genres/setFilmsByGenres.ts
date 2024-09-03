import { Elem } from "../universal/types/Elem";
import { Id } from "../universal/types/Id";
import { GenresFilmCards } from "./GenresFilmCards";
import { root } from "./rootOfGenresPage";

let listFilms: GenresFilmCards;
if (root.genresMoviesBlock  instanceof HTMLElement) {
  listFilms = new GenresFilmCards(root.genresMoviesBlock);
}

export function setFilmsByGenres(event: MouseEvent) {
  const targetElement = event.target as HTMLElement;
  const currentEl: Elem = targetElement.closest(".genres__item");

  if (!currentEl) {
    return;
  }

  const idCurrentGenres: Id = getGenresId(currentEl as Elem);
  listFilms.setCardsOnGenres(idCurrentGenres);

  changeActiveItem(currentEl);
}

let lastActiveEl: Elem = null;
function changeActiveItem(currentEl: Elem) {
  if (lastActiveEl === currentEl) {
    return;
  }

  if (lastActiveEl) {
    lastActiveEl.removeAttribute("active");
  }

  if (currentEl) {
    currentEl.setAttribute("active", "");
  }

  lastActiveEl = currentEl;
}

type GenreId = Id | undefined;
function getGenresId(genresEl: Elem): Id | "error" {
  if (genresEl) {
    const genresId: GenreId = genresEl.dataset.genresId;
    return genresId !== undefined ? genresId : null;
  }
  return "error";
}
