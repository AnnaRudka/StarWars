import {
  setDetails,
  setHeaderOfList,
  setListItems,
  getListItems,
  setDetailsImage,
  getItemID,
} from "../helpers/helpers.js";

import { getPeople } from "../api/api.js";

let peopleList = [];

const createPeopleList = () =>
  peopleList
    .map(
      (people, index) =>
        `<li class ="content-item" data-component="${index}">${people.name}</li>`
    )
    .join("");

export function onPeopleClick() {
  setDetails(" ");
  setDetailsImage("Please select an item to display the details!");
  setHeaderOfList("Characters list loading...");
  getPeople().then((data) => {
    peopleList = data.results;
    setHeaderOfList("Characters list");
    setListItems(createPeopleList());
    getListItems().addEventListener("click", onPeopleDetailsClick);
  });
}

function onPeopleDetailsClick(e) {
  const id = getItemID(e);
  const html = createPeopleDetails(id);
  setDetails(html);
  const image = createPeopleDetailsImage(id);
  setDetailsImage(image);
}

function createPeopleDetailsImage(id) {
  const image = `<img 
    src="https://starwars-visualguide.com/assets/img/characters/${
      1 + Number(id)
    }.jpg" 
    onerror="this.src='images/notfound.png'">`;
  return image;
}

function createPeopleDetails(id) {
  const people = peopleList[id];
  const myHTML = `<h3>${people.name}</h3>
          <ul className="properties-list">
              <li className="property">
                  <span className="term">Eye color:</span>
                  <span>${people.eye_color}</span>
              </li>
              <li className="property">
                  <span className="term">Gender:</span>
                  <span>${people.gender}</span>
              </li>
              <li className="property">
                  <span className="term">Birth year:</span>
                  <span>${people.birth_year}</span>
              </li>
              <li className="property">
                  <span className="term">Height:</span>
                  <span>${people.height}</span>
              </li>
              <li className="property">
                  <span className="term">Created:</span>
                  <span>${people.created}</span>
              </li>
              <li className="property">
                  <span className="term">Mass:</span>
                  <span>${people.mass}</span>
              </li>
          </ul>`;
  return myHTML;
}
