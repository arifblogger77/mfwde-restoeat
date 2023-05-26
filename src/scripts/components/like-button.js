class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set isLiked(params) {
    this._isLiked = params.isLiked;
    this.render();
  }

  render() {
    if (this._isLiked) {
      this.innerHTML = `
        <button aria-label="unlike this movie" id="likebutton" class="like">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
      `;
    } else {
      this.innerHTML = `
        <button aria-label="like this movie" id="likebutton" class="like">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </button>
      `;
    }
  }
}

customElements.define('like-button', LikeButton);
