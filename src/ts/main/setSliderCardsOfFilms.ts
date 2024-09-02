import { fetchPopularMovies } from "../service/api";
import { createSomeCards } from "../universal/createSomeCards";
import { getSliderCard } from "../universal/templateCardFilm/getSliderCard";
import { Elem } from "../universal/types/Elem";
import { InfoOfSomeCards } from "../universal/types/InfoOfSomeCards";

export async function setSliderCardsOfFilms(): Promise<void> {
  const infoOfCards: InfoOfSomeCards = await createSomeCards(
    fetchPopularMovies,
    {},
    getSliderCard
  );

  const listCardsEl: Elem = document.querySelector(".popular-slider");
  const cards: string = infoOfCards.cards.join("");
  if (listCardsEl) {
    listCardsEl.insertAdjacentHTML("beforeend", cards);
  }
}
