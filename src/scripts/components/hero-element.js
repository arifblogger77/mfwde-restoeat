class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
          <picture class="hero__image">
            <source media="(max-width:600px)" srcset="./images/heros/hero-image_2-small.jpg" />
            <img src="/images/heros/hero-image_2-large.jpg" alt="Hero image" />
          </picture>

          <div class="hero__content">
          <div class="hero__inner">
              <h1 class="hero__title">Restaurant yang Membuatmu Nyaman</h1>
              <p class="hero__tagline">Makanan dan layanan yang membuatmu ingin datang lagi</p>
          </div>
          </div>
      </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
