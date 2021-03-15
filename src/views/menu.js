import { createPlanets } from "./planets.js";
import { onPeopleClick } from "./people.js";
import { onStarshipClick } from "./starships.js";
import { getMenu } from "./helpers.js";

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
