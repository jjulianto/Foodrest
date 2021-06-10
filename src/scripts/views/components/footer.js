class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>Copyright © 2021 - Foodrest</footer>
    `;
  }
}
customElements.define('footer-bar', Footer);
