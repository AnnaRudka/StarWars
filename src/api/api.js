export const getPlanets = () => {
  return fetch("https://swapi.dev/api/planets/").then((res) => res.json());
};
export const getPeople = () => {
  return fetch("https://swapi.dev/api/people/").then((res) => res.json());
};
export const getStarships = () => {
  return fetch("https://swapi.dev/api/starships/").then((res) => res.json());
};
export const getFilms = () => {
  return fetch("https://swapi.dev/api/films/").then((res) => res.json());
};
