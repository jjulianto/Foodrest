/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
        <article class="restaurant-item">
            <div class="img-item">
                <p class="restaurant-rating"><span class="material-icons">star</span> ${this._data.rating}</p>
                <img class="restaurant-thumbnail lazyload" data-src="${CONFIG.BASE_IMG_URL}/small/${this._data.pictureId}" alt="${this._data.name}">
            </div>
            <div class="restaurant-content">
                <p class="restaurant-city"><span class="material-icons">room</span> ${this._data.city}</p>
                <h1 class="restaurant-title">${this._data.name}</h1>
                <p class="restaurant-description">${this._data.description.substr(0, 100)}</p>
                <div class="restaurant-parent">
                    <a class="restaurant-button" href="${`/#/detail/${this._data.id}`}">Lihat Detail</a>
                </div>
            </div>
        </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
