/* eslint-disable no-undef */
Feature('Liking Restaurant');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.icon');
  I.see('Tidak ada restoran yang anda favoritkan.', '#empty');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran yang anda favoritkan.', '#empty');

  I.amOnPage('/');
  I.seeElement('.restaurant-item div a');
  I.seeElement('.restaurant-item h1.restaurant-title');
  const firstRestaurantBtn = locate('.restaurant-item div a').first();
  const firstRestaurant = locate('.restaurant-item h1.restaurant-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantBtn);

  I.seeElement('#likeButton');
  const likedRestaurantTitle = await I.grabTextFrom('h1.detail-rest-name');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Cancel liking restaurant', async ({ I }) => {
  I.see('Tidak ada restoran yang anda favoritkan.', '#empty');

  I.amOnPage('/');
  I.seeElement('.restaurant-item div a');
  const firstRestaurantBtn = locate('.restaurant-item div a').first();
  I.click(firstRestaurantBtn);

  I.seeElement('button#likeButton');
  I.click('button#likeButton');

  I.seeElement('button#likedButton');
  I.click('button#likedButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran yang anda favoritkan.', '#empty');
});
