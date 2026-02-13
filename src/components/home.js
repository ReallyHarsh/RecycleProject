export function renderHome() {
  return `
    <section id="home" class="mode-simple fade-in">
      <header class="hero">
        <div class="bounce-enticement">
          <i class="ph ph-recycle"></i>
        </div>
        <h1 id="hero-title">Turn Waste into Worth</h1>
        
        <div class="toggle-container hero-animate delay-2">
          <span>Kid Mode 🎈</span>
          <label class="switch">
            <input type="checkbox" id="simplify-toggle">
            <span class="slider round"></span>
          </label>
          <span>Pro Mode 📊</span>
        </div>

        <p class="subtitle hero-animate delay-1" id="hero-text">
          <span class="simple-only">Recycling is like magic! It turns old trash into new treasures. ✨</span>
          <span class="detailed-only">Effective waste management reduces greenhouse gas emissions and conserves natural resources.</span>
        </p>
      </header>
      
      <div class="card impact-dashboard">
        <h2 id="impact-title">Your Impact</h2>
        <div class="slider-container">
          <label for="impact-slider">
            <span class="simple-only">If you save <span id="item-count">10</span> bottles...</span>
            <span class="detailed-only">Recycling <span id="item-count">10</span> kg of PET plastic...</span>
          </label>
          <input type="range" min="1" max="50" value="10" class="range-slider" id="impact-slider">
        </div>
        <div class="result-display">
          <i class="ph ph-lightning" style="font-size: 2rem; color: var(--accent);"></i>
          <p id="impact-result">
            <span class="simple-only">You power a laptop for <strong>25 hours</strong>! 💻</span>
            <span class="detailed-only">Conserves <strong>0.5 kWh</strong> of energy, equivalent to 25 hours of laptop usage.</span>
          </p>
        </div>
      </div>

      <div class="info-grid">
        <div class="card">
          <i class="ph ph-trash" style="font-size: 2rem; color: var(--danger);"></i>
          <h3>
            <span class="simple-only">Stop the Pile-up! 🛑</span>
            <span class="detailed-only">Landfill Mitigation</span>
          </h3>
          <p>
            <span class="simple-only">Trash mountains are yucky. Let's keep our parks clean!</span>
            <span class="detailed-only">Reduces reliance on landfills, which emit methane and leach fluid toxins.</span>
          </p>
        </div>
        <div class="card">
          <i class="ph ph-recycle" style="font-size: 2rem; color: var(--primary);"></i>
          <h3>
            <span class="simple-only">Money Magic 💰</span>
            <span class="detailed-only">Circular Economy</span>
          </h3>
          <p>
            <span class="simple-only">Recycling creates jobs and saves money for everyone.</span>
            <span class="detailed-only">Promotes a sustainable economy by keeping materials in use and regenerating natural systems.</span>
          </p>
        </div>
        <div class="card">
          <i class="ph ph-tree" style="font-size: 2rem; color: var(--secondary);"></i>
          <h3>
            <span class="simple-only">Save the Trees 🌳</span>
            <span class="detailed-only">Resource Conservation</span>
          </h3>
          <p>
            <span class="simple-only">Paper comes from trees. Recycle paper = Happy trees!</span>
            <span class="detailed-only">Recycling 1 ton of paper saves 17 mature trees and 7,000 gallons of water.</span>
          </p>
        </div>
        <div class="card">
          <i class="ph ph-globe" style="font-size: 2rem; color: var(--accent);"></i>
          <h3>
            <span class="simple-only">Future Heroes 🦸</span>
            <span class="detailed-only">Global Sustainability</span>
          </h3>
          <p>
            <span class="simple-only">Be a hero for the future! Save the planet.</span>
            <span class="detailed-only">Critical for achieving UN Sustainable Development Goals (SDGs) 11, 12, and 13.</span>
          </p>
        </div>
      </div>
    </section>
  `;
}

export function setupHome() {
  const slider = document.getElementById('impact-slider');
  const countSpan = document.querySelectorAll('#item-count');
  const resultP = document.getElementById('impact-result');
  const toggle = document.getElementById('simplify-toggle');
  const homeSection = document.getElementById('home');
  const body = document.body;

  // Initial State: Simple (Toggle Unchecked)
  let isDetailed = false;

  const updateImpact = () => {
    const val = slider.value;
    countSpan.forEach(span => span.textContent = val);
    const hours = (val * 2.5).toFixed(1);
    const energy = (val * 0.05).toFixed(2); // Mock kWh calc

    if (isDetailed) {
      resultP.innerHTML = `Conserves <strong>${energy} kWh</strong> of energy, equivalent to ${hours} hours of laptop usage.`;
    } else {
      resultP.innerHTML = `You power a laptop for <strong>${hours} hours</strong>! 💻`;
    }
  };

  slider.addEventListener('input', updateImpact);

  toggle.addEventListener('change', (e) => {
    isDetailed = e.target.checked;

    if (isDetailed) {
      homeSection.classList.remove('mode-simple');
      homeSection.classList.add('mode-detailed');
      // Update Body Gradient for immersion
      body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    } else {
      homeSection.classList.remove('mode-detailed');
      homeSection.classList.add('mode-simple');
      body.style.background = 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)';
    }

    // Trigger impact update to refresh text style/content
    updateImpact();
  });
}

