import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <img class="restaurant-thumbnail" src="${CONFIG.BASE_IMG_URL}/small/${restaurant.pictureId}" alt="${restaurant.name}">
            <div class="restaurant-content">
                <p class="restaurant-city"><span class="material-icons">room</span> ${restaurant.city}</p>
                <h1 class="restaurant-title">${restaurant.name}</h1>
                <p class="restaurant-rating"><span class="material-icons">star</span> ${restaurant.rating}</p>
                <p class="restaurant-description">${restaurant.description.substr(0, 100)}</p>
                <div class="restaurant-parent">
                    <a class="restaurant-button" href="#">Lihat Detail</a>
                </div>
            </div>
    </article>
  `;

export {
  // eslint-disable-next-line import/prefer-default-export
  createRestaurantItemTemplate,
};
