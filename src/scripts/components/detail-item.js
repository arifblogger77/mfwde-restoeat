import './review-list';
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
        <img class="restaurant-detail-item__thumbnail" src="${CONFIG.BASE_MEDIUM_IMAGE_URL + this._item.pictureId}" alt="${this._item.name}" crossorigin="anonymous" />
        <div class="restaurant-detail-item__content">
          <h2 class="restaurant-detail-item__title">${this._item.name}</h2>
            <h3>Information</h3>
            <h4>Address</h4>
            <p>${this._item.address} - ${this._item.city}</p>
            <h4>Categories</h4>
            <p id="categories" class="restaurant-detail-item__categories"></p>
            <h4>Rating</h4>
            <p>★${this._item.rating}</p>
            <div class="restaurant-detail-item__description">
              <h3>Description</h3>
              <p>${this._item.description}</p>
            </div>
            <h3>Menus</h3>
            <h4>Foods</h4>
            <p id="foods" class="restaurant-detail-item__menus"></p>
            <h4>Drinks</h4>
            <p id="drinks" class="restaurant-detail-item__menus"></p>
        </div>

        <review-list class="restaurant-detail-review"></review-list>
      `;

      this._item.categories.forEach((category) => {
        const categoryContainer = document.createElement('span');
        categoryContainer.innerHTML = category.name;

        document.querySelector('#categories').appendChild(categoryContainer);
      });

      this._item.menus.foods.forEach((food) => {
        const foodContainer = document.createElement('span');
        foodContainer.innerHTML = food.name;

        document.querySelector('#foods').appendChild(foodContainer);
      });

      this._item.menus.drinks.forEach((drink) => {
        const drinkContainer = document.createElement('span');
        drinkContainer.innerHTML = drink.name;

        document.querySelector('#drinks').appendChild(drinkContainer);
      });

      const reviewContainer = document.querySelector('review-list');
      reviewContainer.reviews = {
        reviews: this._item.customerReviews,
        idDetail: this._item.id,
      };
    }
  }

  renderError(message) {
    this.innerHTML = `
      <div class="alert" role="alert">
          ${message}
      </div>
    `;
  }
}

customElements.define('detail-item', DetailItem);
