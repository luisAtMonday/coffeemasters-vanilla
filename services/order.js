import { getProductById } from "./menu.js";

export const addToCart = async (id) => {
  const product = await getProductById(id);
  const alreadyInOrder = coffeemasters.store.cart.filter( p => p.product.id == id );
  if (alreadyInOrder.length == 0) {
    // Add new product to cart
    coffeemasters.store.cart = [...coffeemasters.store.cart, {product, quantity: 1}];
  } else {
    // Update quantity
    coffeemasters.store.cart = coffeemasters.store.cart.map(p => p.product.id == id ? {...p, quantity: p.quantity + 1} : p);
  }
};

export const removeFromCart = async (id) => {
  coffeemasters.store.cart = coffeemasters.store.cart.filter(p => p.product.id != id);
};