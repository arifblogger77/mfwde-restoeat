class SearchElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="search">
        <input id="query" type="text"/>
      <div>
    `;
  }
}

customElements.define('search-element', SearchElement);
