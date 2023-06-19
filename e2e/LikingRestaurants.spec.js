const assert = require('assert');

Feature('LikingRestaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Restaurant tidak ditemukan', '.alert');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan', '.alert');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__title a');
  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantName);

  I.waitForElement('.restaurant-detail-item__content', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('result-item');
  I.seeElement('result-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Restaurant tidak ditemukan', '.alert');

  I.amOnPage('/');

  const names = [];

  for (let i = 1; i <= 3; i += 1) {
    I.waitForElement('.restaurant-item__title a', 60);
    I.seeElement('.restaurant-item__title a');
    I.click(locate('.restaurant-item__title a').at(i));

    I.waitForElement('.restaurant-detail-item__content', 30);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    names.push(await I.grabTextFrom('.restaurant-detail-item__title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('result-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-item__title').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan', '.alert');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__title a');
  I.seeElement('.restaurant-item__title a');

  const firstRestaurant = locate('.restaurant-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantName);

  I.waitForElement('.restaurant-detail-item__content', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('result-item');
  I.seeElement('result-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.waitForElement('.restaurant-detail-item__content', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Restaurant tidak ditemukan', '.alert');
});
