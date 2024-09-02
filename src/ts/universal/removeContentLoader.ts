import { Elem } from "./types/Elem";

const loadWrapper: Elem = document.querySelector(".contentLoad-loaderWrapper");

export function removeContentLoader(): void {
  setTimeout(() => {
    if (loadWrapper) {
      loadWrapper.removeAttribute("active");
    }
    document.body.removeAttribute("lock");
  }, 1500);
}
