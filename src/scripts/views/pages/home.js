import restaurantData from '../../data/restaurantdb-source';

const Home = {
  async render() {
    return `
        <div class="hero">
          <div class="hero-inner">
              <p class="hero-text">Welcome to</p>
              <h1 class="hero-title">Foodrest</h1>
              <p class="hero-tagline">Explore the best restaurants in various parts of Indonesia</p>
              <a class="hero-button" href="#main">Explore</a>
          </div>
        </div>
      
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
              <div class="loader"></div>
              <div id="restaurant" class="restaurants">
              </div>
          </section>
      `;
  },

  async afterRender() {
    const restaurants = await restaurantData.restaurantList();
    const restaurantContainer = document.querySelector('.restaurants');
    const loadingIndicator = document.querySelector('.loader');
    if (restaurants) {
      this.successRequest(restaurants, restaurantContainer, loadingIndicator);
    } else {
      this.failedRequest(restaurants, restaurantContainer, loadingIndicator);
    }
  },

  async successRequest(restaurants, restaurantContainer, loadingIndicator) {
    const restaurantsIt = restaurants;
    const restaurantCon = restaurantContainer;
    const loadIndi = loadingIndicator;

    restaurantsIt.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.data = restaurant;
      restaurantCon.appendChild(restaurantItem);
    });
    loadIndi.style.display = 'none';
  },

  async failedRequest(restaurants, restaurantContainer, loadingIndicator) {
    const restaurantsIt = restaurants;
    const loadIndi = loadingIndicator;
    const restaurantCon = restaurantContainer;

    loadIndi.style.display = 'none';
    restaurantCon.innerHTML = '<p class="error-icon"><span class="material-icons">error</span></p>';
    restaurantsIt.innerHTML = '<h1 style="text-align: center; margin-top: 10px;">Maaf, request tidak dapat dijalankan karena terdapat kesalahan.</h1>';
  },
};

export default Home;
