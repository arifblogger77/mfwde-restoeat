import RestaurantDicodingSource from '../../data/restaurant-dicoding-source';
import UrlParser from '../../routes/url-parser';
// import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <detail-item></detail-item>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDicodingSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('detail-item');
    restaurantContainer.item = { item: restaurant };
  },
};

export default Detail;
