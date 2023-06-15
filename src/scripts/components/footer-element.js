class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
          <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/favorite">Favorite</a></li>
              <li><a href="https://github.com/arifblogger77">About Us</a></li>
          </ul>
          <div class="footer__inner">
              <h1 class="footer__title">
                  <img src="./images/logos/RestoEat 260x60.svg" alt="RestoEat" width="260" height="60">
              </h1>
              <p style="color: white">Copyright © 2023 - RestoEat</p>
          </div>
      </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);
