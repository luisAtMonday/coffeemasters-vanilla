import { addToCart } from "../services/order.js";

export class ProductItem extends HTMLElement {
  constructor() {
      super();    
  }   

  connectedCallback() {
      const template = document.getElementById("product-item-template");
      const content = template.content.cloneNode(true);

      this.appendChild(content);    

      const product = JSON.parse(this.dataset.product);
      this.querySelector("h4").textContent = product.name;
      this.querySelector("p.price").textContent = `$${product.price.toFixed(2)}`;
      this.querySelector("img").src = `data/images/${product.image}`;
      this.querySelector("a").addEventListener("click", event => {
        event.preventDefault();
        if (event.target.tagName.toLowerCase()=="button") {
          addToCart(product.id);
        } else {
          coffeemasters.router.go(`/product/${product.id}`);
        }
      });
    }
}

customElements.define("product-item", ProductItem);