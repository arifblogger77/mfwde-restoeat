class LoadingElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="loading" class="loading display"></div>
    `;
  }
}

customElements.define('loading-element', LoadingElement);
