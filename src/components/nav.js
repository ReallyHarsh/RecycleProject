export function renderNav() {
  return `
    <nav class="bottom-nav">
      <a href="#" data-page="home" class="nav-item active">
        <i class="ph ph-house"></i>
        <span>Home</span>
      </a>
      <a href="#guide" data-page="guide" class="nav-item">
        <i class="ph ph-book-open"></i>
        <span>Guide</span>
      </a>
      <a href="#diy" data-page="diy" class="nav-item">
        <i class="ph ph-hammer"></i>
        <span>DIY</span>
      </a>

      <a href="#game" data-page="game" class="nav-item">
        <i class="ph ph-game-controller"></i>
        <span>Sort-It</span>
      </a>
      <a href="#voice" data-page="voice" class="nav-item">
        <i class="ph ph-microphone"></i>
        <span>Ask</span>
      </a>
    </nav>
  `;
}

export function setupNav(navigateCallback) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      const page = item.getAttribute('data-page');
      navigateCallback(page);
    });
  });
}
