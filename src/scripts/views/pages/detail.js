import '../../components/detail-item';
import '../../components/like-button';
import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <detail-item class="restaurant-detail-item"></detail-item>
      <like-button></like-button>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDicodingSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('detail-item');
    restaurantContainer.item = { item: restaurant };

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('like-button'),
      restaurant,
    });
  },
};

export default Detail;
