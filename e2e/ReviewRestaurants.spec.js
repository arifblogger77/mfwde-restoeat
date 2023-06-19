const assert = require('assert');

Feature('ReviewRestaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing list restaurants', ({ I }) => {
  I.waitForElement('.restaurant-item__title a', 30);
  I.seeElement('.restaurant-item__title a');
});

Scenario('review a restaurants', async ({ I }) => {
  I.waitForElement('.restaurant-item__title a', 30);
  I.seeElement('.restaurant-item__title a');

  I.click(locate('.restaurant-item__title a').first());

  I.waitForElement('.restaurant-detail-item__content', 30);

  const inputName = `CodeceptJs ${new Date()}`;
  const inputReview = `Great! ${new Date()}`;

  I.fillField('#inputName', inputName);
  I.fillField('#inputReview', inputReview);
  I.pressKey('Enter');

  const reviews = [];
  const visibleReviewRestaurants = await I.grabNumberOfVisibleElements('review-item');
  for (let i = 1; i <= visibleReviewRestaurants; i += 1) {
    const name = await I.grabTextFrom(locate('.review-item h4').at(i));
    const review = await I.grabTextFrom(locate('.review-item p').at(i));

    reviews.push({ name, review });
  }

  const matchingReview = reviews.filter((review) => review.name.indexOf(inputName) !== -1);

  matchingReview.forEach((review) => {
    const name = review.name.split('-').slice(0, -1).join('').trim();
    assert.strictEqual(name, inputName);
    assert.strictEqual(review.review, inputReview);
  });
});
