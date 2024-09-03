import { Genres } from "../universal/types/Genres";
import { getGenres } from "./getGenres";
import { root } from "./rootOfGenresPage";

export async function setListOfGenresInPage() {
  let listOfGenres: Genres[] = await getGenres();

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
