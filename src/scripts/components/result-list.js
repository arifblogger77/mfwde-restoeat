class ResultList extends HTMLElement {
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

  renderError(message) {
    this.innerHTML = `
      <div class="alert" role="alert">
          ${message}
      </div>
    `;
  }
}

customElements.define('result-list', ResultList);
