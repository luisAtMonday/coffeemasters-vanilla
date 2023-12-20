import Store from "./services/store.js";
import Router from "./services/router.js";
import { load } from "./services/menu.js";

import ComponentRegistry from "./components/ComponentRegistry.js";

window.coffeemasters = {};
coffeemasters.store = Store;
coffeemasters.router = Router;

window.addEventListener('DOMContentLoaded', async () => {
  load();
  coffeemasters.router.init();
});

window.addEventListener('coffeemasterscartchange', () => {
  const badge = document.querySelector('#badge');
  const qty = coffeemasters.store.cart.reduce( (sum, order) => sum + order.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});