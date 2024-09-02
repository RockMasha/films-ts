import { getSrcImg } from "./getSrcImg";
import { Film } from "./types/Film";
import { GetCard } from "./types/GetCard";

export function createCardOfFilm(info: Film, getCard: GetCard): string {
  const { title: name, poster_path: src, vote_average: ratingVal } = info;
  const img: string = getSrcImg(src);
  const rating: number = Math.round(ratingVal * 10) / 10;

  return getCard({ name, img, rating });
}
