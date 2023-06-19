import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  hero: document.querySelector('.hero'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
  skipLink: document.querySelector('.skip-link'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
