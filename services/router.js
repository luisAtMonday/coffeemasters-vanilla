const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        Router.go(path);
      });
    });
    // Handle URL changes
    window.addEventListener('popstate', e => {
      Router.go(e.state.route, false);
    });

    // Check initial URL just in case
    Router.go(location.pathname);
  },
  go: (route, addToHistory=true) => {
    console.log(`Going to ${route}`);
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    let content;
    switch(route) {
      case '/':
        content = document.createElement('menu-page');
        break;
      case '/order':
        content = document.createElement('order-page');
        break;
      default:
        if(route.startsWith('/product/')) {
          content = document.createElement('details-page');
          const productId = route.substring(route.lastIndexOf('/')+1);
          content.dataset.pid = productId;
        }
    }
    if (content) {
      const main = document.querySelector('main');
      main.innerHTML = '';
      main.appendChild(content);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  }
};

export default Router;