import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import RestaurantSearchPresenter from './list-restaurants/restaurant-search-presenter';
import RestaurantSearchView from './list-restaurants/restaurant-search-view';
import RestaurantShowPresenter from './list-restaurants/restaurant-show-presenter';

const view = new RestaurantSearchView();

const ListRestaurants = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const restaurantSource = new RestaurantDicodingSource();
    new RestaurantShowPresenter({ view, restaurantSource });
    new RestaurantSearchPresenter({ view, restaurantSource });
  },
};

export default ListRestaurants;
