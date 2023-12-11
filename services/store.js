const Store = {
  menu: null,
  cart: []
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    window.dispatchEvent(new Event(`coffeemasters${property}change`));
    return true;
  }
});

export default proxiedStore;