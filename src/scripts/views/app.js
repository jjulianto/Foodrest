import DrawerInitiator from '../utils/drawer-initiator';

/* eslint-disable no-underscore-dangle */
class App {
  constructor({
    hamburger, hero, main, drawer,
  }) {
    this._hamburger = hamburger;
    this._hero = hero;
    this._main = main;
    this._drawer = drawer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburger: this._hamburger,
      hero: this._hero,
      main: this._main,
      drawer: this._drawer,
    });
  }
}

export default App;
