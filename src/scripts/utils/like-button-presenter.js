const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    this._isLiked = await this._isRestaurantExist(id);
    this._renderLike(this._isLiked);
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike(isLiked) {
    this._likeButtonContainer.isLiked = { isLiked };

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      if (isLiked) {
        await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      } else {
        await this._favoriteRestaurants.putRestaurant(this._restaurant);
      }

      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
