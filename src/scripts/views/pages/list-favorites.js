import '../../components/result-list';
import '../../components/result-item';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const ListFavorites = {
  async render() {
    return `
      <section class="content">
        <div class="restaurant">
          <h1 class="restaurant__label">List Favorite Restaurants</h1>
          <result-list></result-list>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const favoriteRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteRestaurantListsContainer = document.querySelector('result-list');
    favoriteRestaurantListsContainer.results = { results: favoriteRestaurants };
  },
};

export default ListFavorites;
