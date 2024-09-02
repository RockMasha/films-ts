import { root } from "./ts/genres/rootOfGenresPage";
import { setActiveGenresLink } from "./ts/genres/setActiveGenresLink";
import { setFilmsByGenres } from "./ts/genres/setFilmsByGenres";
import { setListOfGenresInPage } from "./ts/genres/setListOfGenresInPage";
import { removeContentLoader } from "./ts/universal/removeContentLoader";

setActiveGenresLink();

await setListOfGenresInPage();

if (root.genresTypesList instanceof HTMLElement) {
  root.genresTypesList.addEventListener("click", setFilmsByGenres);
}

removeContentLoader();
