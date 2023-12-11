import API from "./api.js";

export const load = async () => {
  coffeemasters.store.menu = await API.fetchMenu();
};

export const getProductById = async (id) => {
  if (coffeemasters.store.menu == null) {
    await load();
  }
  for (let category of coffeemasters.store.menu) {
    for (let product of category.products) {
      if (product.id == id) {
        return product;
      }
    }
  }
  return null;
};