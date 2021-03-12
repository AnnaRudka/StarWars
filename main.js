//const menuContainer = document.getElementById("menu__list");
const contentList = document.getElementById("content-list");
const headerOfList = document.getElementById("header-of-list");
const menuItems = document.querySelectorAll(".btn__menu");

// Geting data

const getPlanets = () => {
  return fetch("https://swapi.dev/api/planets/").then((res) => res.json());
};
const getPeople = () => {
  return fetch("https://swapi.dev/api/people/").then((res) => res.json());
};
const getStarships = () => {
  return fetch("https://swapi.dev/api/starships/").then((res) => res.json());
};
const getFilms = () => {
  return fetch("https://swapi.dev/api/films/").then((res) => res.json());
};

// Create list of planets

const createPlanet = (planet) => {
  return `<li class ="content-item">${planet.name}</li>`;
};
const createPlanetsList = (planets) => {
  let planetsHTML = "";
  planets.forEach((planet) => {
    planetsHTML += createPlanet(planet);
  });
  return planetsHTML;
};

// Add listeners for btns

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    const btnComponent = e.target.dataset.component;
    if (btnComponent === "people") {
      console.log("people");
      getPeople().then((data) => console.log(data.results[0]));
    } else if (btnComponent === "planets") {
      console.log("planets");
      headerOfList.innerHTML = "Planet list";
      getPlanets().then((data) => {
        contentList.innerHTML = createPlanetsList(data.results);
      });
    } else if (btnComponent === "films") {
      console.log("films");
    } else if (btnComponent === "starships") {
      console.log("starships");
    }
  });
});
