class HeroElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero__inner">
                    <h1 class="hero__title">Restaurant yang Membuatmu Nyaman</h1>
                    <p class="hero__tagline">Makanan dan layanan yang membuatmu ingin datang lagi</p>
                </div>
            </div>
        `;
    }
}

customElements.define("hero-element", HeroElement);