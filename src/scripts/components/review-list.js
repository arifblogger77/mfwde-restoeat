import AddReviewInitiator from '../utils/add-review-initiator';
import './review-item';

class ReviewList extends HTMLElement {
  conncectedCallback() {
    this.render();
  }

  set reviews(params) {
    this._reviews = params.reviews;
    this._idDetail = params.idDetail;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="review-list" class="review__list">
        <h3>Customer Review</h3>
        <form action="" method="POST">
          <input type="text" placeholder="Your Name" name="inputName" id="inputName" required/>
          <input type="text" placeholder="Your Review" name="inputReview" id="inputReview" required/>
          <button id="sendReview" type="submit">Send</button>
        </form>
      </div>
    `;

    this._reviews.reverse().forEach((review) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.item = { item: review };

      document.querySelector('#review-list').appendChild(reviewItem);
    });

    AddReviewInitiator.init({
      submitButton: document.querySelector('#sendReview'),
      reviewContainer: this,
      id: this._idDetail,
      inputName: document.querySelector('#inputName'),
      inputReview: document.querySelector('#inputReview'),
    });
  }
}

customElements.define('review-list', ReviewList);
