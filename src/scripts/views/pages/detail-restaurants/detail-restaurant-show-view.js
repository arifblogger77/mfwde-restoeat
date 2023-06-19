import '../../../components/detail-item';
import '../../../components/like-button';
import '../../../components/loading-element';
import LikeButtonPresenter from '../../../utils/like-button-presenter';

class DetailRestaurantShowView {
  getTemplate() {
    return `
      <section class="content">
        <loading-element></loading-element>
        <detail-item class="restaurant-detail-item"></detail-item>
        <like-button></like-button>
      </section>
    `;
  }

  showDetailRestaurant(restaurant, favoriteRestaurants) {
    const restaurantContainer = document.querySelector('detail-item');
    const loader = document.querySelector('#loading');

    loader.classList.remove('display');
    if (restaurant.message) {
      restaurantContainer.renderError(restaurant.message);
    } else {
      restaurantContainer.item = { item: restaurant };
    }

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('like-button'),
      favoriteRestaurants,
      restaurant,
    });
  }
}

export default DetailRestaurantShowView;
