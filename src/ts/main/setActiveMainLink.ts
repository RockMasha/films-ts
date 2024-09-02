import { root } from "./rootOfMainPage";

export function setActiveMainLink(): void {
  if (root.mainLink instanceof HTMLElement) {
    root.mainLink.setAttribute("active", "");
  }
}