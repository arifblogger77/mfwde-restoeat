import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import DetailRestaurantShowPresenter from './detail-restaurants/detail-restaurant-show-presenter';
import DetailRestaurantShowView from './detail-restaurants/detail-restaurant-show-view';

const view = new DetailRestaurantShowView();

const Detail = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const restaurantSource = new RestaurantDicodingSource();
    new DetailRestaurantShowPresenter({
      view, restaurantSource, favoriteRestaurants: FavoriteRestaurantIdb,
    });
  },
};

export default Detail;
