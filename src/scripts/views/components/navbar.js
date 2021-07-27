class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header-container">
          <div class="header-logo">
                <p>Foodrest</p>
          </div>
          <button id="hamburger" class="hamburger" aria-label="click to show navbar">☰</button>
          <nav id="drawer">
              <ul class="nav-list">
                  <li class="nav-item"><a href="#">Home</a></li>
                  <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                  <li class="nav-item"><a href="https://julianto.vercel.app/" target="_blank" rel="noreferrer">About Us</a></li>
              </ul>
          </nav>
      </div>
    `;
  }
}
customElements.define('navigation-bar', Navbar);
