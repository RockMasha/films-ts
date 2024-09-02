import { Film } from "./Film";

export interface Data {
    page: number;
    results: Array<Film>;
    total_pages: number;
    total_results: number;
  }