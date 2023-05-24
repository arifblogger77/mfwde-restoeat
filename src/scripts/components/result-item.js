import truncateString from '../utils/truncate';

class ResultItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set item(param) {
    this._item = param.item;
    // this.render();
  }

  render() {
    this.innerHTML = `
      <article class="restaurant-item">
          <img class="restaurant-item__thumbnail"
              src="${this._item.pictureId}"
              alt="Foto ${this._item.name}">
          <div class="restaurant-item__content">
              <h1 class="restaurant-item__title"><a href="#">${this._item.name}</a></h1>
              <p class="restaurant-item__subtitle"> 
                  <a href="#" class="restaurant-item__subtitle__info">${this._item.city}</a> (★${this._item.rating})
              </p>
              <p class="restaurant-item__description">${truncateString(this._item.description, 100)}</p>
          </div>
      </article>
    `;
  }
}

customElements.define('result-item', ResultItem);
