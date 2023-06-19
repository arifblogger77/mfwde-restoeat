import '../components/app-bar';
import '../components/hero-element';
import '../components/footer-element';
import routes from '../routes/router';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import SkipLinkInitiator from '../utils/skip-link-initiator';

class App {
  constructor({
    button, hero, drawer, content, skipLink,
  }) {
    this._button = button;
    this._hero = hero;
    this._drawer = drawer;
    this._content = content;
    this._skipLink = skipLink;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      hero: this._hero,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
    SkipLinkInitiator.init({
      button: this._skipLink,
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
