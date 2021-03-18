import {
  setDetails,
  setHeaderOfList,
  setListItems,
  getListItems,
  setDetailsImage,
  getItemID,
} from "../helpers/helpers.js";

import { getFilms } from "../api/api.js";

let filmsList = [];

const createFilmsList = () =>
  filmsList
    .map(
      (film, index) =>
        `<li class ="content-item" data-component="${index}">${film.title}</li>`
    )
    .join("");

export function onFilmsClick() {
  setDetails(" ");
  setDetailsImage("Please select an item to display the details!");
  setHeaderOfList("Films list loading...");
  getFilms().then((data) => {
    filmsList = data.results;
    setHeaderOfList("Films list");
    setListItems(createFilmsList());
    getListItems().addEventListener("click", onFilmsDetailsClick);
  });
}

function onFilmsDetailsClick(e) {
  const id = getItemID(e);
  const html = createFilmsDetails(id);
  setDetails(html);
  const image = createFilmsDetailsImage(id);
  setDetailsImage(image);
}

function createFilmsDetailsImage(id) {
  const image = `<img 
    src="https://starwars-visualguide.com/assets/img/films/${
      1 + Number(id)
    }.jpg" 
    onerror="this.src='images/notfound.png'">`;
  return image;
}

function createFilmsDetails(id) {
  const film = filmsList[id];
  const myHTML = `<h3>${film.title}</h3>
          <ul className="properties-list">
              <li className="property">
                  <span className="term">Episode:</span>
                  <span>${film.episode_id}</span>
              </li>
              <li className="property">
                  <span className="term">Release date:</span>
                  <span>${film.release_date}</span>
              </li>
              <li className="property">
                  <span className="term">Director:</span>
                  <span>${film.director}</span>
              </li>
              <li className="property">
                  <span className="term">Producer:</span>
                  <span>${film.producer}</span>
              </li>
              <li className="property">
                  <span className="term">Opening crawl:</span>
                  <span>${film.opening_crawl}</span>
              </li>
          </ul>`;
  return myHTML;
}
