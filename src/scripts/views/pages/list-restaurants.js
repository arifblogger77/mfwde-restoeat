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
    const restaurantLists = document.querySelector('result-list');
    restaurantLists.results = { results: restaurants };
  },
};

export default ListRestaurants;
