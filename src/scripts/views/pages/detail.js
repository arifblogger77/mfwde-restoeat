import '../../components/detail-item';
import '../../components/like-button';
import '../../components/loading-element';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <section class="content">
        <loading-element></loading-element>
        <detail-item class="restaurant-detail-item"></detail-item>
        <like-button></like-button>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('detail-item');
    const loader = document.querySelector('#loading');

    let restaurant = await FavoriteRestaurantIdb.getRestaurant(url.id);
    if (!restaurant) {
      restaurant = await RestaurantDicodingSource.detailRestaurant(url.id);
    }

    loader.classList.remove('display');
    if (restaurant.message) {
      restaurantContainer.renderError(restaurant.message);
    } else {
      restaurantContainer.item = { item: restaurant };
    }

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('like-button'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });
  },
};

export default Detail;
