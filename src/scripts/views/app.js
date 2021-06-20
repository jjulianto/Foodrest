import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import './components/navbar';
import './components/footer';
import './components/restaurant-item';
import DrawerInitiator from '../utils/drawer-initiator';

/* eslint-disable no-underscore-dangle */
class App {
  constructor({
    hamburger, drawer, content,
  }) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburger: this._hamburger,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (err) {
      this._content.innerHTML = '<div class="wrapper"><div class="sub-hero"><div class="hero-inner"><p class="hero-text">Welcome to</p><h1 class="hero-title">Foodrest</h1></div></div><div class="icon"><p class="error-icon"><span class="material-icons">error</span></p></div><h1 style="text-align: center; margin-top: 10px;">Maaf, request tidak dapat dijalankan karena terdapat kesalahan.</h1></div>';
    }
  }
}

export default App;
