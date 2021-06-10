import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import './components/navbar';
import './components/footer';
import DrawerInitiator from '../utils/drawer-initiator';

/* eslint-disable no-underscore-dangle */
class App {
  constructor({
    hamburger, drawer, hero, content,
  }) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburger: this._hamburger,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
