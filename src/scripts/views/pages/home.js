import restaurantData from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section>         
            <h1 class="center">Kenapa kamu harus memilih kami</h1>
            <div class="main-inner">
                <div class="main-icon">
                    <span class="material-icons">favorite</span>
                    <p>Simpan Restoran favoritmu agar mudah ditemukan</p>
                </div>
                <div class="main-icon">
                    <span class="material-icons">reviews</span>
                    <p>Cari tahu restoran terbaik dengan fitur rating dan review dari pengunjung</p>
                </div>
                <div class="main-icon">
                    <span class="material-icons">restaurant</span>
                    <p>Pilih restoran dengan menu yang cocok untuk kamu dan keluarga</p>
                </div>
            </div>
        </section>

        <section class="item">
            <h1 class="restaurant-label">Restoran yang sedang populer</h1>
            <div id="restaurant" class="restaurants">
            </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await restaurantData.restaurantList();
    const restaurantContainer = document.querySelector('.restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
