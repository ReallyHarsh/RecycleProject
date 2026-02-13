import './style.css';
import { renderNav, setupNav } from './components/nav.js';
import { renderHome, setupHome } from './components/home.js';
import { renderGuide, setupGuide } from './components/guide.js';
import { renderScan, setupScan } from './components/scan.js';
import { renderGame, setupGame } from './components/game.js';
import { renderVoice, setupVoice } from './components/voice.js';

const app = document.querySelector('#app');

function render(page) {
  let content = '';
  // Simple router
  switch (page) {
    case 'home':
      content = renderHome();
      break;
    case 'guide':
      content = renderGuide();
      break;
    case 'scan':
      content = renderScan();
      break;
    case 'game':
      content = renderGame();
      break;
    case 'voice':
      content = renderVoice();
      break;
    default:
      content = renderHome();
  }

  app.innerHTML = `
    <main class="container">
      ${content}
    </main>
    ${renderNav()}
  `;

  // Re-attach listeners
  setupNav(render);

  if (page === 'home' || !page) setupHome();
  if (page === 'guide') setupGuide();
  if (page === 'scan') setupScan();
  if (page === 'game') setupGame();
  if (page === 'voice') setupVoice();
}

// Initial render
render('home');
