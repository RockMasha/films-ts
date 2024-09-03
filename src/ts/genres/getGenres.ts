import { fetchListGenres } from "../service/api";
import { Genres } from "../universal/types/Genres";
import { ListGenresData } from "../universal/types/ListGenresData";

export async function getGenres(): Promise<Genres[]> {
    const genres: ListGenresData = await fetchListGenres();    
    return genres.genres;
}

