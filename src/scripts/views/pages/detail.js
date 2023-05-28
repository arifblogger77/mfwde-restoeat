import '../../components/detail-item';
import '../../components/like-button';
import '../../components/loading-element';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <detail-item class="restaurant-detail-item">
        <loading-element></loading-element>
      </detail-item>
      <like-button></like-button>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('detail-item');
    const loader = document.querySelector('loading-element');

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

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('like-button'),
      restaurant,
    });
  },
};

export default Detail;
