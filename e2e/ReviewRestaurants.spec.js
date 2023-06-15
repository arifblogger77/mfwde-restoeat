Feature('ReviewRestaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing list restaurants', ({ I }) => {
  I.waitForElement('.restaurant-item__title a');
  I.seeElement('.restaurant-item__title a');
});

Scenario('review a restaurants', ({ I }) => {
  I.waitForElement('.restaurant-item__title a');
  I.seeElement('.restaurant-item__title a');

  I.click(locate('.restaurant-item__title a').first());

  I.waitForElement('.restaurant-detail-item__content', 30);

  I.fillField('#inputName', 'CodeceptJs');
  I.fillField('#inputReview', 'Great!');
  I.pressKey('Enter');
});
