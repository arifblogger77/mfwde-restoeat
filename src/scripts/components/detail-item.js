import CONFIG from '../globals/config';

class DetailItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set item(param) {
    this._item = param.item;
    this.render();
  }

  render() {
    if (this._item) {
      this.innerHTML = `
        <h2 class="restaurant-detail-item__title">${this._item.name}</h2>
        <img class="restaurant-detail-item__thumbnail" src="${CONFIG.BASE_MEDIUM_IMAGE_URL + this._item.pictureId}" alt="${this._item.name}" />
        <div class="restaurant-detail-item__content">
          <h3>Information</h3>
          <h4>City</h4>
          <p>${this._item.city}</p>
          <h4>Rating</h4>
          <p>${this._item.rating}</p>
        </div>
        <div class="restaurant-detail-item__description">
          <h3>Description</h3>
          <p>${this._item.description}</p>
        </div>
      `;
    }
  }
}

customElements.define('detail-item', DetailItem);
