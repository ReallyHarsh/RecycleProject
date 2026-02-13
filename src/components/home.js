export function renderHome() {
  return `
    <section id="home" class="fade-in">
      <header class="hero">
        <div class="bounce-enticement">
          <i class="ph ph-recycle"></i>
        </div>
        <h1 id="hero-title">Turn Waste into Worth</h1>
        <p class="subtitle hero-animate delay-1" id="hero-text">
          Recycling isn't just about trash—it's about our future. Keep it simple, keep it green.
        </p>
      </header>
      
      <div class="card impact-dashboard">
        <h2 id="impact-title">Your Impact</h2>
        <div class="slider-container">
          <label for="impact-slider">
            Recycling <span id="item-count">10</span> kg of plastic...
          </label>
          <input type="range" min="1" max="50" value="10" class="range-slider" id="impact-slider">
        </div>
        <div class="result-display">
          <i class="ph ph-lightning" style="font-size: 2rem; color: var(--accent);"></i>
          <p id="impact-result">
            Conserves <strong>0.5 kWh</strong> of energy.
          </p>
        </div>
      </div>

      <div class="info-grid">
        <div class="card">
          <i class="ph ph-trash" style="font-size: 2rem; color: var(--danger);"></i>
          <h3>Reduces Waste</h3>
          <p>Diverts tons of waste from landfills, reducing pollution and greenhouse gases.</p>
        </div>
        <div class="card">
          <i class="ph ph-recycle" style="font-size: 2rem; color: var(--primary);"></i>
          <h3>Creates Jobs</h3>
          <p>The recycling industry creates far more jobs than landfill waste management.</p>
        </div>
        <div class="card">
          <i class="ph ph-tree" style="font-size: 2rem; color: var(--secondary);"></i>
          <h3>Saves Trees</h3>
          <p>Recycling paper directly saves millions of trees every year.</p>
        </div>
        <div class="card">
          <i class="ph ph-globe" style="font-size: 2rem; color: var(--accent);"></i>
          <h3>Conserves Resources</h3>
          <p>Reduces the need to extract new raw materials from the earth.</p>
        </div>
      </div>
    </section>
  `;
}

export function setupHome() {
  const slider = document.getElementById('impact-slider');
  const countSpan = document.getElementById('item-count');
  const resultP = document.getElementById('impact-result');

  const updateImpact = () => {
    const val = slider.value;
    countSpan.textContent = val;
    // Simple impact calculation
    const energy = (val * 0.05).toFixed(2);
    resultP.innerHTML = `Conserves <strong>${energy} kWh</strong> of energy.`;
  };

  slider.addEventListener('input', updateImpact);
}
