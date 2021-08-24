const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 1000);

async function getData() {
  const response = await fetch("https://randomuser.me/api");

  const { results } = await response.json();
  const image = results[0].picture.large;
  const street = results[0].location.country;
  const description = results[0].login.md5;

  header.innerHTML = `<img src='${image}'>`;
  title.innerHTML = street;
  excerpt.innerHTML = description;
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="John Doe" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_texts.forEach((bg_text) =>
    bg_text.classList.remove("animated-bg")
  );
}
