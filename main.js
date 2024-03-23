import './style.css';
// Import our custom CSS
import './src/scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { spinnner } from './src/js/loadSpin.js';
import { createBtn } from './src/js/button.js';

 function createPage () {
  const app =document.querySelector('#app');
  app.className = "container-fluid bg-dark"
  spinnner(app);
  console.log(`createPage ${new Date()}`);
   createBtn(app);
}
createPage();

