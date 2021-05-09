import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

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
console.log('Hello Coders! :)');