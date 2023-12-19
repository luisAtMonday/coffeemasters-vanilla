export class MenuComponent extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    
    const styles = document.createElement('style');
    this.root.appendChild(styles);

    (async function() {
      const cssFile = await fetch('/components/MenuPage.css');
      const css = await cssFile.text();
      styles.textContent = css;
    })();

  }

  connectedCallback() {
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener('coffeemastersmenuchange', () => {
      this.render();
    });
    this.render();
  }

  render() {
    this.root.querySelector('#menu').innerHTML = '';
    if (coffeemasters.store.menu) {
      for (let category of coffeemasters.store.menu) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <h3>${category.name}</h3>
          <ul class='category'>
          </ul>
        `;
        this.root.querySelector('#menu').appendChild(listItem);
        category.products.forEach(p => {
          const item = document.createElement('product-item');
          item.dataset.product = JSON.stringify(p);
          listItem.querySelector('ul').appendChild(item);
        });
      }
    } else {
      this.root.querySelector('#menu').innerHTML = 'Loading...';
    }
  }
}
customElements.define('menu-page', MenuComponent);