import '../../components/result-list';
import '../../components/result-item';
import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';

const ListRestaurants = {
  async render() {
    return `
      <section class="content">
        <div class="restaurant">
          <h1 class="restaurant__label">List Restaurants</h1>
          <result-list>
            <loading-element></loading-element>
          </result-list>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDicodingSource.listRestaurants();
    const restaurantListsContainer = document.querySelector('result-list');
    const loader = document.querySelector('loading-element');

    loader.classList.remove('display');
    if (restaurants.message) {
      restaurantListsContainer.renderError(restaurants.message);
    } else {
      restaurantListsContainer.results = { results: restaurants };
    }
  },
};

export default ListRestaurants;
