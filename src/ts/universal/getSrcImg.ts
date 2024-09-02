const imageBaseUrl: string = "https://image.tmdb.org/t/p/w300";

export function getSrcImg(srcOfImg: string | null): string {
  if(srcOfImg){
    return `${imageBaseUrl}${srcOfImg}`;
  }
  return "./img/default_img.svg"
}