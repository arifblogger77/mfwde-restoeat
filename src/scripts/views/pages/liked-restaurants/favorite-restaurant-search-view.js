import '../../../components/result-item';
import '../../../components/result-list';
import '../../../components/search-element';
import SearchPresenter from '../../../utils/search-presenter';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <section class="content">
        <div class="restaurant">
          <h1 class="restaurant__label">List Favorite Restaurants</h1>
          <search-element></search-element>
          <result-list></result-list>
        </div>
      </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    SearchPresenter.init({ callback });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    if (!restaurants) return;

    const restaurantListsContainer = document.querySelector('result-list');

    if (restaurants.length > 0) {
      restaurantListsContainer.results = { results: restaurants };
    } else {
      restaurantListsContainer.renderError('Restaurant tidak ditemukan');
    }

    document.querySelector('.restaurant')
      .dispatchEvent(new Event('restaurants:updated'));
  }
}

export default FavoriteRestaurantSearchView;
