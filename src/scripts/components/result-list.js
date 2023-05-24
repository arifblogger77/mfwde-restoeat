class ResultList extends HTMLElement {
  set results(params) {
    this._results = params.results;
    console.table(this._results);
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="restaurant-list" class="restaurant__list"></div>
    `;

    this._results.restaurants.forEach((restaurant) => {
      const resultItem = document.createElement('result-item');
      resultItem.item = { item: restaurant };

      document.querySelector('#restaurant-list').appendChild(resultItem);
    });
  }
}

customElements.define('result-list', ResultList);
