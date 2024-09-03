import { getGenres } from "../../genres/getGenres";
import { Genres } from "./Genres";

const genres: Genres[] = await getGenres()
const listId: string[] = genres.map((item) => item.id.toString());

type GenresId = typeof listId[number]

export type Id = GenresId | null;