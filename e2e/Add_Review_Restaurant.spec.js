/* eslint-disable no-undef */
Feature('Add Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add Review', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item div a');
  const firstRestaurant = locate('.restaurant-item div a').first();
  I.click(firstRestaurant);

  I.seeElement('input#name');
  I.seeElement('textarea#review');
  I.seeElement('button#btn-add-review');
  I.fillField('input#name', 'E2E Testing');
  I.fillField('textarea#review', 'Review with E2E Testing');
  I.click('button#btn-add-review');

  I.seeElement('.list-review');
});
