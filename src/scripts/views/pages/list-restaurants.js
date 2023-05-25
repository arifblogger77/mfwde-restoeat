import '../../components/result-list';
import '../../components/result-item';
import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';

const ListRestaurants = {
  async render() {
    return `
      <section class="content">
        <div class="restaurant">
          <h1 class="restaurant__label">List Restaurants</h1>
          <result-list></result-list>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDicodingSource.listRestaurants();
    const restaurantListsContainer = document.querySelector('result-list');
    restaurantListsContainer.results = { results: restaurants };
  },
};

export default ListRestaurants;
