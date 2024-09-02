import { fetchPopularMovies } from "../service/api";
import { getSrcImg } from "../universal/getSrcImg";
import { Data } from "../universal/types/Data";
import { Elem } from "../universal/types/Elem";
import { Root } from "../universal/types/Root";
import { root } from "./rootOfMainPage";

type PopularFilm = {
  srcOfImg: string;
  rating: number;
  name: string;
  text: string;
};

export async function setInfoOfMostPopularFilm(): Promise<void> {
  const info: PopularFilm = await getInfoOfMostPopularFilm();

  setContent(info);
  setRating(info.rating);
}

async function getInfoOfMostPopularFilm(): Promise<PopularFilm> {
  const requestAnswer: Data = await fetchPopularMovies();
  const { results: popularFilms } = requestAnswer;
  const {
    poster_path: src,
    vote_average: rating,
    title: name,
    overview: text,
  } = popularFilms[0];

  const srcOfImg: string = await getSrcImg(src);

  return { srcOfImg, rating, name, text };
}

function setContent(info: PopularFilm): void {
  const { srcOfImg, name, text } = info;

  const mostPopularFilm = root.mostPopularFilm as Root;
  const imgEl = mostPopularFilm.img as Elem;
  const nameEl = mostPopularFilm.name as Elem;
  const textEl = mostPopularFilm.text as Elem;

  if (imgEl instanceof HTMLImageElement) {
    imgEl.src = srcOfImg;
  }
  if (nameEl) {
    nameEl.textContent = name;
  }
  if (textEl) {
    textEl.textContent = text;
  }
}

function setRating(rating: number): void {
  const mostPopularFilm = root.mostPopularFilm as Root;
  let ratingValue = mostPopularFilm.ratingValue as Elem;
  let ratingStar = mostPopularFilm.ratingStar as Elem;

  if (ratingValue) {
    ratingValue.textContent = (Math.round(rating * 10) / 10).toString();
  }
  if (ratingStar) {
    ratingStar.style.width = `${rating / 0.1}%`;
  }
}
