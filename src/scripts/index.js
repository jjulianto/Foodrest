import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

const hamburger = document.querySelector('#hamburger');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

hamburger.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function() {
    drawer.classList.remove('open');
});

main.addEventListener('click', function() {
    drawer.classList.remove('open');
});

data.restaurants.forEach((restaurant) => {
    const dataset =`
        <article class="restaurant-item">
            <img class="restaurant-thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name}">
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
    document.getElementById("restaurant").innerHTML += dataset;
  })