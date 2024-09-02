import { setActiveMainLink } from "./ts/main/setActiveMainLink";
import { setInfoOfMostPopularFilm } from "./ts/main/setInfoOfMostPopularFilm";
import { setSliderCardsOfFilms } from "./ts/main/setSliderCardsOfFilms";
import "./ts/main/swiper";
import { removeContentLoader } from "./ts/universal/removeContentLoader";

setInfoOfMostPopularFilm();

await setSliderCardsOfFilms();

setActiveMainLink();

removeContentLoader();
