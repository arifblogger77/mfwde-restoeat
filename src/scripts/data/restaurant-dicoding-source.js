import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDicodingSource {
  async listRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error;
    }
  }

  async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      return error;
    }
  }

  async searchRestaurants(query) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(query));
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return error;
    }
  }

  static async addReview(data) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch (error) {
      return error;
    }
  }
}

export default RestaurantDicodingSource;
