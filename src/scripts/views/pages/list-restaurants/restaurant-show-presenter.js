class RestaurantShowPresenter {
  constructor({ view, restaurantSource }) {
    this._view = view;
    this._restaurantSource = restaurantSource;

    this._showRestaurants();
  }

  async _showRestaurants() {
    const restaurants = await this._restaurantSource.listRestaurants();
    this._displayRestaurants(restaurants);
  }

  _displayRestaurants(restaurants) {
    this._view.showRestaurants(restaurants);
  }
}

export default RestaurantShowPresenter;
