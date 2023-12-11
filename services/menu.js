import API from "./api.js";

export async function loadData() {
  coffeemasters.store.menu = await API.fetchMenu();
}