import { Data } from "../universal/types/Data";
import { InfoOfRequest } from "../universal/types/InfoOfRequest";
import { ListGenresData } from "../universal/types/ListGenresData";

const apiKey: string = "a7d2ec52ab2717b6be947c1334145223";
const BASE_URL: string = "https://api.themoviedb.org/3";

export async function fetchPopularMovies() {
  const url: string = `${BASE_URL}/movie/popular?api_key=${apiKey}&sort_by=release_date.desc&page=1`;
  const response = await fetch(url);
  const data: Data = await response.json();

  return data;
}

export async function fetchListGenres() {
  const url: string = `${BASE_URL}/genre/movie/list?api_key=${apiKey}`;
  const response = await fetch(url);
  const data: ListGenresData = await response.json();

  return data;
}

type Controller = AbortController | null;
let controller: Controller = null;
export async function fetchFilmsByGenres(info: InfoOfRequest) {
  if (controller) {
    controller.abort();
  }

  controller = new AbortController();
  const { genreId, page } = info;
  const url: string = `${BASE_URL}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`;
  const response = await fetch(url, { signal: controller.signal });
  const data: Data = await response.json();
  controller = null;

  return data;
}
