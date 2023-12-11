import Store from "./services/store.js";
import { loadData } from "./services/menu.js";

window.coffeemasters = {};
coffeemasters.store = Store;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
});