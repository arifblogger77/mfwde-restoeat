class ResultList extends HTMLElement {
  connectedCallback() {
    this._results = this._dummy();
    this.renderSkeleton();
  }

  _dummy() {
    const array = [];

    for (let i = 1; i <= 10; i += 1) {
      array.push({ id: i });
    }

    return array;
  }

  set results(params) {
    this._results = params.results;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="restaurant-list" class="restaurant__list"></div>
    `;

    this._results.forEach((restaurant) => {
      const resultItem = document.createElement('result-item');
      resultItem.item = { item: restaurant };

      document.querySelector('#restaurant-list').appendChild(resultItem);
    });
  }

  renderSkeleton() {
    this.innerHTML = `
        <div id="restaurant-list" class="restaurant__list"></div>
    `;

    this._results.forEach((restaurant) => {
      const resultItem = document.createElement('result-item');
      resultItem.itemSkeleton = { item: restaurant };

      document.querySelector('#restaurant-list').appendChild(resultItem);
    });
  }

  renderError(message) {
    this.innerHTML = `
      <div class="alert" role="alert">
          ${message}
      </div>
    `;
  }
}

customElements.define('result-list', ResultList);
