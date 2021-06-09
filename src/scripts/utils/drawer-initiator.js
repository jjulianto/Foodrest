/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({
    hamburger, hero, main, drawer,
  }) {
    hamburger.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
