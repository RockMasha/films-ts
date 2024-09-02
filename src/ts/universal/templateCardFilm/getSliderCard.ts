import { InfoOfCard } from "../types/InfoOfCard";

export function getSliderCard(info: InfoOfCard): string {
  const { img, name, rating } = info;

  return `<div class="card swiper-slide">
            <img
              class="card__img"
              src='${img ? img : "./img/default_img.jpg"}'
              alt="img of ${name}"
            />
            <div class="card__main-info">
              <h3 class="card__title">${name}</h3>
              <div class="card__rating rating">
                <div class="rating__body">
                  <div style="width:${
                    rating / 0.1
                  }%" class="rating__active"></div>
                </div>
                <p class="card__rating-value rating__value">${
                  rating !== 0 ? rating : "no rating"
                }</p>
              </div>
            </div>
          </div>`;
}
