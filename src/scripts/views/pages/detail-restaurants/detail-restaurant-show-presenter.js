import UrlParser from '../../../routes/url-parser';

class DetailRestaurantShowPresenter {
  constructor({ view, restaurantSource, favoriteRestaurants }) {
    this._view = view;
    this._restaurantSource = restaurantSource;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showDetailRestaurant();
  }

  async _showDetailRestaurant() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    let restaurant = await this._favoriteRestaurants.getRestaurant(url.id);
    if (!restaurant) {
      restaurant = await this._restaurantSource.detailRestaurant(url.id);
    }

    this._displayDetailRestaurant(restaurant, this._favoriteRestaurants);
  }

  _displayDetailRestaurant(restaurant, favoriteRestaurants) {
    this._view.showDetailRestaurant(restaurant, favoriteRestaurants);
  }
}

export default DetailRestaurantShowPresenter;
