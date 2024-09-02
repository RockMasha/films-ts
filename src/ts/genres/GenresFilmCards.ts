import { fetchFilmsByGenres } from "../service/api";
import { createSomeCards } from "../universal/createSomeCards";
import { Elem } from "../universal/types/Elem";
import { Id } from "../universal/types/Id";
import { InfoOfSomeCards } from "../universal/types/InfoOfSomeCards";
import { updateProgressBar } from "./btnUpSettings";

export class GenresFilmCards {
  private showMoreFilms: () => Promise<string>;

  listCardsEl: Elem;
  fatherElement: HTMLElement;
  btn: Elem;
  genresId: Id;
  page: number = 1;
  max_films: number;
  isNoBtn: boolean = true;

  constructor(element: HTMLElement) {
    this.listCardsEl = element.querySelector(".cards-list");
    this.fatherElement = element;
    this.btn;
    this.genresId;
    this.page = 1;
    this.max_films;
    this.isNoBtn = true;
  }

  async setCardsOnGenres(id: Id): Promise<void> {
    if (this.#isEqualGenres(id)) {
      return;
    }

    if (!this.#isOnPageCardLoader()) {
      this.#setCardLoader();
    }

    if (!this.isNoBtn && this.btn) {
      this.#removeBtn();
    } else {
      this.isNoBtn = false;
    }

    this.setGenresId(id);

    if (this.listCardsEl) {
      this.listCardsEl.innerHTML = "";
    }
    this.resetPage();

    const answer: string = await this.setCardsOfFilms();
    if (answer !== "error") {
      this.#setBtn();
      this.#removeCardLoader();
    }
  }

  async setCardsOfFilms(): Promise<string> {
    this.nextPage();
    if (this.page !== 1 || this.#checkNumbOfFilms()) {
      this.#disableBtn();
      this.#loadBtn();
    }

    let answer: string = "ok";
    try {
      const infoOfCards: InfoOfSomeCards = await createSomeCards(
        fetchFilmsByGenres,
        {
          genreId: this.genresId,
          page: this.page,
        }
      );

      const { cards, maxFilms } = infoOfCards;
      this.#setCards(cards.join(""));
      this.#setMaxFilms(maxFilms);
    } catch (error) {
      answer = "error";
    }

    if (this.#checkNumbOfFilms()) {
      this.#removeBtn();
      this.isNoBtn = true;
    }

    if (this.page !== 1 && !this.#checkNumbOfFilms()) {
      this.#activeBtn();
      this.#unLoadBtn();
    }

    updateProgressBar();

    return answer;
  }

  setGenresId(id: Id): void {
    this.genresId = id;
  }

  nextPage(): void {
    this.page += 1;
  }
  resetPage(): void {
    this.page = 0;
  }

  #isEqualGenres(id: Id): boolean {
    return this.genresId === id;
  }

  #setCards(cards: string): void {
    if (this.listCardsEl) {
      this.listCardsEl.insertAdjacentHTML("beforeend", cards);
    }
  }

  #setMaxFilms(numb: number): void {
    this.max_films = numb;
  }

  #setBtn(): void {
    const templateBtn: string =
      '<button class="genres__bth-more">More movies</button>';
    this.fatherElement.insertAdjacentHTML("beforeend", templateBtn);
    this.btn = document.querySelector(".genres__bth-more");
    this.#activeBtn();
  }
  #removeBtn(): void {
    if (this.btn) {
      this.btn.remove();
    }
  }
  #disableBtn(): void {
    if (this.btn) {
      this.btn.removeEventListener("click", this.showMoreFilms);
    }
  }
  #activeBtn(): void {
    this.showMoreFilms = this.setCardsOfFilms.bind(this);
    if (this.btn) {
      this.btn.addEventListener("click", this.showMoreFilms);
    }
  }
  #loadBtn(): void {
    if (this.btn) {
      this.btn.insertAdjacentHTML("beforeend", getBtnLoader());
    }
  }
  #unLoadBtn(): void {
    if (!this.btn) {
      return;
    }
    const loader: Elem = this.btn.querySelector(".btnMoreLoader");
    if (loader) {
      loader.remove();
    }
  }

  #setCardLoader(): void {
    this.fatherElement.insertAdjacentHTML("beforeend", getCardLoader());
  }
  #removeCardLoader(): void {
    const loader: Elem = this.fatherElement.querySelector(".genresCard-loader");
    if (loader) {
      loader.remove();
    }
  }
  #isOnPageCardLoader(): boolean {
    const loader: Elem = this.fatherElement.querySelector(".genresCard-loader");
    if (loader) {
      return true;
    }
    return false;
  }

  #checkNumbOfFilms(): boolean {
    return this.page * 20 >= this.max_films;
  }
}

function getBtnLoader(): string {
  return `<div class="btnMoreLoader"></div>`;
}

function getCardLoader(): string {
  return `<div class="genresCard-loader"></div>`;
}
