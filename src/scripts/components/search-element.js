class SearchElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="search">
        <input id="query" class="search__query" type="text" placeholder="Search..."/>
      <div>
    `;
  }
}

customElements.define('search-element', SearchElement);
