const loadText = document.querySelector(".loading-text") as HTMLElement;
const background = document.querySelector(".background") as HTMLElement;

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  loadText.textContent = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0) as string;
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
): string | number => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
