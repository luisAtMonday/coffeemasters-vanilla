import API from "./api.js";

export const load = async () => {
  coffeemasters.store.menu = await API.fetchMenu();
};