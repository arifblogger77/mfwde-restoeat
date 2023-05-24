class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header">
          <div class="header__inner">
          <h1 class="header__title">
              <img src="./images/logos/RestoEat 2 260x60.svg" alt="RestoEat">
          </h1>
          </div>
          <button id="hamburger" type="button">☰</button>

          <nav id="drawer" class="nav">
          <ul class="nav__list">
              <li class="nav__item"><a href="/" onclick="location.href">Home</a></li>
              <li class="nav__item"><a href="#">Favorite</a></li>
              <li class="nav__item"><a href="https://github.com/arifblogger77">About Us</a></li>
          </ul>
          </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
