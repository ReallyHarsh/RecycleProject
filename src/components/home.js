export function renderHome() {
    return `
    <section id="home" class="fade-in">
      <header class="hero">
        <h1>Turn Waste into Worth</h1>
        <p class="subtitle" id="hero-text">Recycling isn't just about trash—it's about our future. Keep it simple, keep it green.</p>
        <div class="toggle-container">
          <span>Simple</span>
          <label class="switch">
            <input type="checkbox" id="simplify-toggle">
            <span class="slider round"></span>
          </label>
          <span>Detailed</span>
        </div>
      </header>
      
      <div class="card impact-dashboard">
        <h2>YOUR Impact</h2>
        <div class="slider-container">
          <label for="impact-slider">If you recycle <span id="item-count">10</span> plastic bottles...</label>
          <input type="range" min="1" max="50" value="10" class="range-slider" id="impact-slider">
        </div>
        <div class="result-display">
          <i class="ph ph-lightning" style="font-size: 2rem; color: var(--accent);"></i>
          <p id="impact-result">You save enough energy to power a laptop for <strong>25 hours</strong>!</p>
        </div>
      </div>

      <div class="info-grid">
        <div class="card">
          <i class="ph ph-trash" style="font-size: 2rem; color: var(--danger);"></i>
          <h3>Why it matters</h3>
          <p>Landfills are overflowing. We need to act now.</p>
        </div>
        <div class="card">
          <i class="ph ph-recycle" style="font-size: 2rem; color: var(--primary);"></i>
          <h3>Economy</h3>
          <p>Recycling creates jobs and resources.</p>
        </div>
      </div>
    </section>
  `;
}

export function setupHome() {
    const slider = document.getElementById('impact-slider');
    const countSpan = document.getElementById('item-count');
    const resultP = document.getElementById('impact-result');
    const toggle = document.getElementById('simplify-toggle');
    const heroText = document.getElementById('hero-text');

    // Impact Logic
    slider.addEventListener('input', (e) => {
        const val = e.target.value;
        countSpan.textContent = val;
        // 1 bottle ~ 2.5 hours of laptop usage (approx stats for demo)
        const hours = (val * 2.5).toFixed(1);
        resultP.innerHTML = `You save enough energy to power a laptop for <strong>${hours} hours</strong>!`;
    });

    // Simple-ifier Logic
    toggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            // Detailed
            heroText.textContent = "Recycling reduces the need for extracting, refining, and processing raw materials all of which create potential for substantial air and water pollution.";
        } else {
            // Simple
            heroText.textContent = "Recycling isn't just about trash—it's about our future. Keep it simple, keep it green.";
        }
    });
}
