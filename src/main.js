import { createMenu } from "./views/menu.js";
import { createPlanets } from "./components/planets.js";

// init main menu, add event handlers
createMenu();

// fetch Planets data, and select Alderaan as default
createPlanets();
