import { materials } from '../data/materials.js';

export function renderGuide() {
    return `
    <section id="guide" class="fade-in">
      <header class="hero">
        <h2>Recycling Guide</h2>
        <div class="search-container">
          <i class="ph ph-magnifying-glass search-icon"></i>
          <input type="text" id="guide-search" placeholder="Search items (e.g., 'Pizza box')..." />
        </div>
      </header>

      <div id="materials-grid" class="materials-grid">
        <!-- populated by js -->
      </div>
    </section>
  `;
}

export function setupGuide() {
    const grid = document.getElementById('materials-grid');
    const searchInput = document.getElementById('guide-search');

    function renderItems(filter = '') {
        grid.innerHTML = '';
        const term = filter.toLowerCase();

        materials.forEach(cat => {
            // Filter items logic
            const matchingItems = cat.items.filter(item =>
                item.name.toLowerCase().includes(term) ||
                cat.category.toLowerCase().includes(term)
            );

            if (matchingItems.length > 0) {
                // Create Category Section
                const catElem = document.createElement('div');
                catElem.className = 'category-section';
                catElem.innerHTML = `
          <h3 style="color: ${cat.color}"><i class="ph ${cat.icon}"></i> ${cat.category}</h3>
          <div class="items-list">
            ${matchingItems.map(item => `
              <div class="item-card ${!item.recyclable ? 'not-recyclable' : ''} ${item.recyclable === 'special' ? 'special-recyclable' : ''}">
                <div class="item-header">
                  <h4>${item.name}</h4>
                  ${item.recyclable === true
                        ? '<span class="tag yes">Recycle</span>'
                        : item.recyclable === 'special'
                            ? '<span class="tag special">Special</span>'
                            : '<span class="tag no">Trash</span>'}
                </div>
                <p class="prep-text"><i class="ph ph-check-circle"></i> ${item.prep}</p>
                ${item.note ? `<p class="note-text"><i class="ph ph-info"></i> ${item.note}</p>` : ''}
              </div>
            `).join('')}
          </div>
        `;
                grid.appendChild(catElem);
            }
        });

        if (grid.innerHTML === '') {
            grid.innerHTML = '<div class="no-results"><p>No items found. Try a different search.</p></div>';
        }
    }

    renderItems();

    searchInput.addEventListener('input', (e) => {
        renderItems(e.target.value);
    });
}
