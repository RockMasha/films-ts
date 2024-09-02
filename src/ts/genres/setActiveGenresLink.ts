import { root } from "./rootOfGenresPage";

export function setActiveGenresLink(): void {
  if (root.headerGenresLink instanceof HTMLElement) {
    root.headerGenresLink.setAttribute("active", "");
  }
}
