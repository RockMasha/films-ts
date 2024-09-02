import { root } from "./rootOfGenresPage";

window.onscroll = checkBtn;
if (root.scrollToTopBtn instanceof HTMLElement) {
  root.scrollToTopBtn.addEventListener("click", scrollUp);
}

function checkBtn(): void {
  if (isEnoughBottom()) {
    activeBtn();
    updateProgressBar();
    return;
  }

  hiddenBtn();
}

function scrollUp(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function updateProgressBar(): void {
  const progress: number = getScrollProgress();

  if (root.BtnTopProgressLine instanceof HTMLElement) {
    root.BtnTopProgressLine.style.strokeDasharray = `${progress}, 100`;
  }
}

function isEnoughBottom(): boolean {
  return (
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
  );
}

function activeBtn(): void {
  if (root.scrollToTopBtn instanceof HTMLElement) {
    root.scrollToTopBtn.style.display = "block";
  }
}

function hiddenBtn(): void {
  if (root.scrollToTopBtn instanceof HTMLElement) {
    root.scrollToTopBtn.style.display = "none";
  }
}

function getScrollProgress(): number {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollDistanceFromTop: number = scrollTop || document.body.scrollTop;
  const allDistance: number = scrollHeight - clientHeight;

  return (scrollDistanceFromTop / allDistance) * 100;
}
