import '../../../components/loading-element';
import '../../../components/result-list';
import '../../../components/result-item';
import '../../../components/search-element';
import SearchPresenter from '../../../utils/search-presenter';

class RestaurantSearchView {
  getTemplate() {
    return `
      <section class="content">
        <div class="restaurant">
          <h1 class="restaurant__label">List Restaurants</h1>
          <search-element></search-element>
          <loading-element></loading-element>
          <result-list></result-list>
        </div>
      </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    SearchPresenter.init({ callback });
  }

  showRestaurants(restaurants = []) {
    if (!restaurants) return;

    const restaurantListsContainer = document.querySelector('result-list');
    const loader = document.querySelector('#loading');

    loader.classList.remove('display');

    if (restaurants.message) {
      restaurantListsContainer.renderError(restaurants.message);
    } else if (restaurants.length > 0) {
      restaurantListsContainer.results = { results: restaurants };
    } else {
      restaurantListsContainer.renderError('Restaurant tidak ditemukan');
    }

    document.querySelector('.restaurant')
      .dispatchEvent(new Event('restaurants:updated'));
  }
}

export default RestaurantSearchView;
