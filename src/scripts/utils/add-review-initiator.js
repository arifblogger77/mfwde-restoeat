import RestaurantDicodingSource from '../data/restaurant-dicoding-source';

const AddReviewInitiator = {
  async init({
    submitButton, reviewContainer, id, inputName, inputReview,
  }) {
    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const container = reviewContainer;

      if (!inputName.value || !inputReview.value) {
        // eslint-disable-next-line no-alert
        alert('Field Required');
        return;
      }

      const data = await RestaurantDicodingSource.addReview({
        id,
        name: inputName.value,
        review: inputReview.value,
      });

      container.reviews = { reviews: data, idDetail: id };
    });
  },
};

export default AddReviewInitiator;
