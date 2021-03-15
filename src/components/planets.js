import {
  setDetails,
  setHeaderOfList,
  setListItems,
  getListItems,
  setDetailsImage,
  getItemID,
  setActiveListItem,
  removeActiveListItem,
} from "../helpers/helpers.js";
import { getPlanets } from "../api/api.js";

const ALDERAAN_ID = 1;

let planetsList = [];
let activePlanetID = ALDERAAN_ID;

const createPlanetsList = () =>
  planetsList
    .map(
      (planet, index) =>
        `<li class ="content-item" data-component="${index}">${planet.name}</li>`
    )
    .join("");

export function createPlanets() {
  setHeaderOfList("Planet list loading...");

  getPlanets().then((data) => {
    planetsList = data.results;

    setHeaderOfList("Planet list");

    setListItems(createPlanetsList());

    createPlanetDetails(ALDERAAN_ID);
    setActiveListItem(ALDERAAN_ID);

    getListItems().addEventListener("click", (e) => {
      const id = getItemID(e);
      removeActiveListItem(activePlanetID);
      activePlanetID = id;
      setActiveListItem(id);
      createPlanetDetails(id);
    });
  });
}

function createPlanetDetails(id) {
  const html = createPlanetDetailsDescription(id);
  setDetails(html);
  const image = createPlanetDetailsImage(id);
  setDetailsImage(image);
}

function createPlanetDetailsImage(id) {
  const image = `<img 
    src="https://starwars-visualguide.com/assets/img/planets/${
      1 + Number(id)
    }.jpg" 
    onerror="this.src='images/notfound.png'">`;
  return image;
}
function createPlanetDetailsDescription(id) {
  const planet = planetsList[id];
  const myHTML = `<h3>${planet.name}</h3>
          <ul className="properties-list">
              <li className="property">
                  <span className="term">Population:</span>
                  <span>${planet.population}</span>
              </li>
              <li className="property">
                  <span className="term">Rotation Period:</span>
                  <span>${planet.rotation_period}</span>
              </li>
              <li className="property">
                  <span className="term">Diameter:</span>
                  <span>${planet.diameter}</span>
              </li>
              <li className="property">
                  <span className="term">Climate:</span>
                  <span>${planet.climate}</span>
              </li>
              <li className="property">
                  <span className="term">Orbital Period</span>
                  <span>${planet.orbital_period}</span>
              </li>
              <li className="property">
                  <span className="term">Climate:</span>
                  <span>${planet.climate}</span>
              </li>
          </ul>`;
  return myHTML;
}
