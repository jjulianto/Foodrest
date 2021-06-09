// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';
import App from './views/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
  hamburger: document.querySelector('#hamburger'),
  hero: document.querySelector('.hero'),
  main: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
});

data.restaurants.forEach((restaurant) => {
  const dataset = `
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
  document.getElementById('restaurant').innerHTML += dataset;
});
