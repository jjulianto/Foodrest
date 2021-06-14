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
                    <a class="restaurant-button" href="${`/#/detail/${restaurant.id}`}">Lihat Detail</a>
                </div>
            </div>
    </article>
`;

const createCategoryTemplate = (category) => `
  <p class="category-item">${category.name}</p>
`;

const createMenuTemplate = (menu) => `
  <p class="menu-item">${menu.name}</p>
`;

const createDetailTemplate = (restaurant, category, foods, drinks) => `
    <div class="wrapper-detail">
        <div class="restaurant-photo">
            <div class="detail-photo">
                <img src="${CONFIG.BASE_IMG_URL}/medium/${restaurant.pictureId}" alt="${restaurant.name}">
                    <div class="detail-rate">
                        &#9733; ${restaurant.rating}
                    </div>
            </div>
        </div>
        <div class="info-restaurant">
            <h1 class="detail-rest-name">${restaurant.name}</h1>
            <p class="restaurant-city"><span class="material-icons">room</span> ${restaurant.address}, ${restaurant.city}</p>
            <div class="category">
                ${category}
            </div>
            <p class="detail-desc">
                ${restaurant.description}
            </p>
        </div>
    </div>
    <div class="foods-menu">
        <h1 class="food-name"><span class="material-icons">lunch_dining</span> Menu Makanan</div>
        <div class="menu">
            ${foods}
        </div>
    </div>
    <div class="drinks-menu">
        <h1 class="drink-name"><span class="material-icons">local_cafe</span> Menu Minuman</div>
        <div class="menu">
            ${drinks}
        </div>
    </div>
`;

export {
  createRestaurantItemTemplate, createCategoryTemplate, createMenuTemplate, createDetailTemplate,
};
