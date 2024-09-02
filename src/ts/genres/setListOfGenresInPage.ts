import { fetchListGenres } from "../service/api";
import { Genres } from "../universal/types/Genres";
import { ListGenresData } from "../universal/types/ListGenresData";
import { root } from "./rootOfGenresPage";

export async function setListOfGenresInPage() {
  const genres: ListGenresData = await fetchListGenres();
  let listOfGenres: Genres[] = genres.genres;

  const listEl: string[] = listOfGenres.map((item: Genres) =>
    createItemOfGenres(item)
  );
  if (root.genresTypesList) {
    root.genresTypesList.innerHTML = listEl.join("");
  }
}

function createItemOfGenres(info: Genres): string {
  const { id, name } = info;
  return `<li class="genres__item" data-genres-id="${id}">
              <button class="genres-item__btn">${name}</button>
            </li>
    `;
}
