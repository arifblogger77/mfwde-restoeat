import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import truncateString from '../utils/truncate';
import CONFIG from '../globals/config';

class ResultItem extends HTMLElement {
  set item(param) {
    this._item = param.item;
    this.render();
  }

  set itemSkeleton(param) {
    this._item = param.item;
    this.renderSkeleton();
  }

  render() {
    this.innerHTML = `
      <article class="restaurant-item">
          <img class="restaurant-item__thumbnail lazyload"
              data-src="${this._item.pictureId ? CONFIG.BASE_MEDIUM_IMAGE_URL + this._item.pictureId : ''}"
              alt="Foto ${this._item.name}" crossorigin="anonymous" />
          <div class="restaurant-item__content">
              <h1 class="restaurant-item__title"><a href="/#/detail/${this._item.id}">${this._item.name || '-'}</a></h1>
              <p class="restaurant-item__subtitle">
                  <a href="/#/detail/${this._item.id}" class="restaurant-item__subtitle__info">${this._item.city || '-'}</a> (★${this._item.rating || '-'})
              </p>
              <p class="restaurant-item__description">${truncateString(this._item.description || '-', 120)}</p>
          </div>
      </article>
    `;
  }

  renderSkeleton() {
    this.innerHTML = `
      <article class="restaurant-item">
          <div class="restaurant-item__thumbnail skeleton"></div>
          <div class="restaurant-item__content">
              <h1 class="restaurant-item__title skeleton skeleton-text__body"><a href="/#"></a></h1>
              <p class="restaurant-item__subtitle skeleton skeleton-text"></p>
              <p class="restaurant-item__description skeleton skeleton-text__body__full"></p>
          </div>
      </article>
    `;
  }
}

customElements.define('result-item', ResultItem);
