const SearchPresenter = {
  async init({ callback }) {
    this._callback = callback;

    await this._renderSearch(this._callback);
  },

  async _renderSearch(callback) {
    const query = document.querySelector('#query');
    query.addEventListener('change', (event) => {
      callback(event.target.value);
    });
  },
};

export default SearchPresenter;
