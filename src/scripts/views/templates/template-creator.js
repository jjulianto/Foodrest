/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
            <div class="img-item">
                <p class="restaurant-rating"><span class="material-icons">star</span> ${restaurant.rating}</p>
                <img class="restaurant-thumbnail lazyload" data-src="${CONFIG.BASE_IMG_URL}/small/${restaurant.pictureId}" alt="${restaurant.name}">
            </div>
            <div class="restaurant-content">
                <p class="restaurant-city"><span class="material-icons">room</span> ${restaurant.city}</p>
                <h1 class="restaurant-title">${restaurant.name}</h1>
                <p class="restaurant-description">${restaurant.description.substr(0, 100)}</p>
                <div class="restaurant-parent">
                    <a class="restaurant-button" href="${`/#/detail/${restaurant.id}`}">Lihat Detail</a>
                </div>
            </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" class="btn-like" id="likeButton">
    <span class="material-icons">favorite_border</span>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" class="btn-like" id="likedButton">
    <span class="material-icons">favorite</span>
  </button>
`;

const createReviewTemplate = (review) => `
    <div class="list-review">
        <p class="nama-review">${review.name}</p>
        <p class="detail-desc">${review.review}</p>
        <p class="waktu-review"><span class="material-icons">schedule</span> ${review.date}</p>
    </div>
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
                <img class="lazyload" data-src="${CONFIG.BASE_IMG_URL}/medium/${restaurant.pictureId}" alt="${restaurant.name}">
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

    <div class="content-add-review">
        <div class="form-wrapper">
            <div class="title-add-review">
                <h1><span class="material-icons">reviews</span> Tambah Review</h1>
            </div>
            <form>
                <div cLass="form-group">
                    <input type="text" class="input" id="name" placeholder="Masukkan nama kamu..." autocomplete="off">
                </div>
                <div cLass="form-group">
                    <textarea class="input" id="review" rows="3" placeholder="Masukkan review kamu..."  autocomplete="off"></textarea>
                </div>
                <div cLass="form-group review-btn">
                    <div class="line-button">
                        <button class="btn-review" id="btn-add-review">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="detail-reviews">
        <h1 class="title-review"><span class="material-icons">textsms</span> Apa Kata Orang?</h1>
        <div id="review-list">
                
        </div>
    </div>
`;

export {
  createRestaurantItemTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate, createReviewTemplate, createCategoryTemplate, createMenuTemplate, createDetailTemplate,
};
