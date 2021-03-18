import { createPlanets } from "../components/planets.js";
import { onPeopleClick } from "../components/people.js";
import { onStarshipClick } from "../components/starships.js";
import { onFilmsClick } from "../components/films.js";
import { getMenu } from "../helpers/helpers.js";

export function createMenu() {
  getMenu().forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      const btn = e.target.dataset.component;
      switch (btn) {
        case "planets":
          createPlanets();
          break;
        case "people":
          onPeopleClick();
          break;
        case "films":
          onFilmsClick();
          break;
        case "starships":
          onStarshipClick();
          break;
      }
    });
  });
}
