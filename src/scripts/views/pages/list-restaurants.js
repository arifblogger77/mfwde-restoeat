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
    // const restaurants = await RestaurantDicodingSource.listRestaurants();
    // const restaurantListsContainer = document.querySelector('result-list');
    // const loader = document.querySelector('loading-element');

    // loader.classList.remove('display');
    // if (restaurants.message) {
    //   restaurantListsContainer.renderError(restaurants.message);
    // } else {
    //   restaurantListsContainer.results = { results: restaurants };
    // }
  },
};

export default ListRestaurants;
