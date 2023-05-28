class ReviewItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set item(param) {
    this._item = param.item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="review-item">
        <h4>${this._item.name} - <small>${this._item.date}</small></h4>
        <p>${this._item.review}</p>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
