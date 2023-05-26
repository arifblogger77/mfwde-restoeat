import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    this._isLiked = await this._isRestaurantExist(id);
    this._renderLike(this._isLiked);
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike(isLiked) {
    this._likeButtonContainer.isLiked = { isLiked };

    const likeButton = document.querySelector('#likebutton');
    likeButton.addEventListener('click', async () => {
      if (isLiked) {
        await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      } else {
        await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      }

      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
