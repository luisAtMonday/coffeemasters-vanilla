import Store from "./services/store.js";
import Router from "./services/router.js";
import { load } from "./services/menu.js";

import { MenuComponent } from "./components/MenuComponent.js";

window.coffeemasters = {};
coffeemasters.store = Store;
coffeemasters.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  load();
  coffeemasters.router.init();
}) ;