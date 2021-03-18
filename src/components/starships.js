import {
  setDetails,
  setHeaderOfList,
  setListItems,
  getListItems,
  setDetailsImage,
  getItemID,
} from "../helpers/helpers.js";

import { getStarships } from "../api/api.js";

let starshipList = [];

export function onStarshipClick() {
  setDetails(" ");
  setDetailsImage("Please select an item to display the details!");
  setHeaderOfList("Characters list loading...");
  getStarships().then((data) => {
    starshipList = data.results;
    setHeaderOfList("Starships list");
    setListItems(createStarshipList());
    getListItems().addEventListener("click", onStarshipDetailsClick);
  });
}

const createStarshipList = () =>
  starshipList
    .map(
      (starship, index) =>
        `<li class ="content-item" data-component="${index}">${starship.name}</li>`
    )
    .join("");

function onStarshipDetailsClick(e) {
  const id = getItemID(e);
  const html = createStarshipDetails(id);
  setDetails(html);
  const image = createStarshipDetailsImage(id);
  setDetailsImage(image);
}

function createStarshipDetailsImage(id) {
  const image = `<img 
    src="https://starwars-visualguide.com/assets/img/starships/${
      1 + Number(id)
    }.jpg" 
    onerror="this.src='images/notfound.png'">`;
  return image;
}

function createStarshipDetails(id) {
  const starship = starshipList[id];
  const myHTML = `<h3>${starship.name}</h3>
          <ul className="properties-list">
              <li className="property">
                  <span className="term">Model:</span>
                  <span>${starship.model}</span>
              </li>
              <li className="property">
                  <span className="term">MGLT:</span>
                  <span>${starship.MGLT}</span>
              </li>
              <li className="property">
                  <span className="term">Created:</span>
                  <span>${starship.created}</span>
              </li>
              <li className="property">
                  <span className="term">Crew:</span>
                  <span>${starship.crew}</span>
              </li>
              <li className="property">
                  <span className="term">Max atmosphering speed:</span>
                  <span>${starship.max_atmosphering_speed}</span>
              </li>
              <li className="property">
                  <span className="term">Passengers:</span>
                  <span>${starship.passengers}</span>
              </li>
          </ul>`;
  return myHTML;
}
