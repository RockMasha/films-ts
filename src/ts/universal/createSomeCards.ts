import { createCardOfFilm } from "./createCardFilm";
import { getOriginalCard } from "./templateCardFilm/getOriginalCard";
import { Data } from "./types/Data";
import { GetCard } from "./types/GetCard";
import { InfoOfRequest } from "./types/InfoOfRequest";
import { InfoOfSomeCards } from "./types/InfoOfSomeCards";

type Request = (info: InfoOfRequest) => Promise<Data>;

export async function createSomeCards(
  request: Request,
  infoOfRequest: InfoOfRequest,
  templateCard: GetCard = getOriginalCard
): Promise<InfoOfSomeCards> {
  const requestAnswer: Data = await request(infoOfRequest);
  const { results: infoOfFilms, total_results: maxFilms } = requestAnswer;
  const cards: string[] = infoOfFilms.map((item) =>
    createCardOfFilm(item, templateCard)
  );
  
  return { cards, maxFilms };
}
