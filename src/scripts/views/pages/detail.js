import UrlParser from '../../routes/url-parser';
import restaurantData from '../../data/restaurantdb-source';
import { createDetailTemplate, createMenuTemplate, createCategoryTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div class="wrapper">
            <div class="sub-hero">
                <div class="hero-inner">
                    <p class="hero-text">Welcome to</p>
                    <h1 class="hero-title">Foodrest</h1>
                    <p class="hero-tagline">Detail Restaurant</p>
                </div>
            </div>
            <div class="loader"></div>
            <div class="restaurant-detail">
            </div>
        </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await restaurantData.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.restaurant-detail');
    const loadingIndicator = document.querySelector('.loader');

    if (restaurantDetail) {
      this.successFetch(restaurantDetail, detailContainer, loadingIndicator);
    } else {
      this.failedFetch(restaurantDetail, detailContainer, loadingIndicator);
    }
  },

  async successFetch(restaurantDetail, detailContainer, loadingIndicator) {
    const restaurantObject = restaurantDetail;
    const restaurantContainer = detailContainer;
    const loadIndicator = loadingIndicator;

    let categories = '';
    let foods = '';
    let drinks = '';

    restaurantObject.categories.forEach((category) => {
      categories += createCategoryTemplate(category);
    });
    restaurantObject.menus.foods.forEach((food) => {
      foods += createMenuTemplate(food);
    });
    restaurantObject.menus.drinks.forEach((drink) => {
      drinks += createMenuTemplate(drink);
    });

    loadIndicator.style.display = 'none';
    // eslint-disable-next-line max-len
    restaurantContainer.innerHTML = createDetailTemplate(restaurantObject, categories, foods, drinks);
  },

  async failedFetch(restaurantDetail, detailContainer, loadingIndicator) {
    const restaurantObject = restaurantDetail;
    const restaurantContainer = detailContainer;
    const loadIndicator = loadingIndicator;

    loadIndicator.style.display = 'none';
    restaurantContainer.innerHTML = '<p class="error-icon"><span class="material-icons">error</span></p>';
    restaurantObject.innerHTML = '<h1 style="text-align: center; margin-top: 10px;">Maaf, request tidak dapat dijalankan karena terdapat kesalahan.</h1>';
  },
};

export default Detail;
