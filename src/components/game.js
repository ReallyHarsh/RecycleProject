export const gameItems = [
  // Trash
  { name: 'Pizza Box (Greasy)', type: 'trash', icon: 'ph-pizza', reason: 'Grease contaminates paper recycling.' },
  { name: 'Chip Bag', type: 'trash', icon: 'ph-cookie', reason: 'Multi-layer material (foil+plastic) is hard to separate.' },
  { name: 'Styrofoam Cup', type: 'trash', icon: 'ph-coffee', reason: 'Styrofoam is rarely recyclable in curbside programs.' },
  { name: 'Broken Glass', type: 'trash', icon: 'ph-wine', reason: 'Broken glass is a safety hazard for sorters.' },
  { name: 'Used Napkin', type: 'trash', icon: 'ph-toilet-paper', reason: 'Soiled paper cannot be recycled.' },
  { name: 'Plastic Straw', type: 'trash', icon: 'ph-coffee', reason: 'Too small/light for machines to sort.' },

  // Recycle
  { name: 'Plastic Bottle', type: 'recycle', icon: 'ph-bottle', reason: 'PET plastic is highly recyclable! Keep cap on.' },
  { name: 'Soda Can', type: 'recycle', icon: 'ph-can', reason: 'Aluminum can be recycled infinitely.' },
  { name: 'Newspaper', type: 'recycle', icon: 'ph-newspaper', reason: 'Clean paper is perfect for recycling.' },
  { name: 'Cereal Box', type: 'recycle', icon: 'ph-package', reason: 'Cardboard is valuable. Flatten it first.' },
  { name: 'Glass Jar', type: 'recycle', icon: 'ph-jar-label', reason: 'Rinse it out. Glass is easily recycled.' },
  { name: 'Shampoo Bottle', type: 'recycle', icon: 'ph-drop', reason: 'HDPE plastic is very recyclable. Rinse it.' },
  { name: 'Soup Can', type: 'recycle', icon: 'ph-cylinder', reason: 'Steel cans are magnetic and easy to sort.' },
  { name: 'Milk Carton', type: 'recycle', icon: 'ph-brandy', reason: 'Cartons are recyclable in most modern facilities.' },

  // Compost
  { name: 'Apple Core', type: 'compost', icon: 'ph-apple-logo', reason: 'Organic waste creates nutrient-rich compost.' },
  { name: 'Banana Peel', type: 'compost', icon: 'ph-smiley', reason: 'Fruit peels decompose quickly.' },
  { name: 'Egg Shells', type: 'compost', icon: 'ph-egg', reason: 'Add calcium to your compost pile.' },
  { name: 'Coffee Grounds', type: 'compost', icon: 'ph-coffee-bean', reason: 'Great nitrogen source for compost.' },
  { name: 'Tea Bag', type: 'compost', icon: 'ph-tea-bag', reason: 'Paper tea bags are compostable (remove staple).' },
  { name: 'Dead Leaves', type: 'compost', icon: 'ph-leaf', reason: 'Yard waste is perfect carbon for compost.' }
];

export function renderGame() {
  return `
    <section id="game" class="fade-in">
      <header class="hero">
        <h2>Sort-It!</h2>
        <p>Drag the item to the correct bin.</p>
      </header>

      <div class="game-container">
        <div class="score-board">
          <span><i class="ph ph-leaf"></i> Credits: <span id="score">0</span></span>
        </div>

        <div class="bins-container">
          <div class="bin recycle" data-type="recycle">
            <i class="ph ph-recycle"></i>
            <span>Recycle</span>
          </div>
          <div class="bin trash" data-type="trash">
            <i class="ph ph-trash"></i>
            <span>Trash</span>
          </div>
          <div class="bin compost" data-type="compost">
            <i class="ph ph-plant"></i>
            <span>Compost</span>
          </div>
        </div>

        <div id="spawner" class="spawner">
          <!-- Item appears here -->
        </div>

        <div id="feedback" class="feedback-modal hidden">
          <h3 id="feedback-title"></h3>
          <p id="feedback-msg"></p>
          <button class="btn" id="next-btn">Next Item</button>
        </div>
      </div>
    </section>
  `;
}

export function setupGame() {
  let score = 0;
  let currentItem = null;
  const scoreEl = document.getElementById('score');
  const spawner = document.getElementById('spawner');
  const feedbackEl = document.getElementById('feedback');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackMsg = document.getElementById('feedback-msg');
  const nextBtn = document.getElementById('next-btn');

  function spawnItem() {
    const randomItem = gameItems[Math.floor(Math.random() * gameItems.length)];
    currentItem = randomItem;

    spawner.innerHTML = `
      <div class="current-item" draggable="true" id="draggable-item">
        <i class="ph ${randomItem.icon}"></i>
        <span>${randomItem.name}</span>
      </div>
    `;

    const draggie = document.getElementById('draggable-item');

    draggie.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', randomItem.type);
      draggie.style.opacity = '0.5';
    });

    draggie.addEventListener('dragend', () => {
      draggie.style.opacity = '1';
    });

    // Touch support (simple implementation)
    // For a fully robust mobile drag-drop, we'd use a library or extensive touch logic.
    // Simplifying for this demo to click-to-select logic if drag fails on mobile.
    // Or just "Tap bin to sort" if selected.
    // Let's stick to HTML5 DnD for now, and maybe add click fallback.

    draggie.addEventListener('click', () => {
      // Allow tapping item then tapping bin?
      // For now, let's keep it simple.
    });
  }

  const bins = document.querySelectorAll('.bin');
  bins.forEach(bin => {
    bin.addEventListener('dragover', (e) => {
      e.preventDefault(); // Allow drop
      bin.classList.add('drag-over');
    });

    bin.addEventListener('dragleave', () => {
      bin.classList.remove('drag-over');
    });

    bin.addEventListener('drop', (e) => {
      e.preventDefault();
      bin.classList.remove('drag-over');
      const type = e.dataTransfer.getData('text/plain');
      const binType = bin.getAttribute('data-type');

      handleSort(binType);
    });

    // Click fallback for mobile (tap bin to put current item in it)
    bin.addEventListener('click', () => {
      if (currentItem) {
        handleSort(bin.getAttribute('data-type'));
      }
    });
  });

  function handleSort(binType) {
    if (!currentItem) return;

    if (binType === currentItem.type) {
      // Correct
      score += 10;
      scoreEl.innerText = score;
      showFeedback(true, currentItem);
    } else {
      // Wrong
      showFeedback(false, currentItem);
    }

    // Clear item
    spawner.innerHTML = '';
    currentItem = null;
  }

  function showFeedback(correct, item) {
    feedbackEl.classList.remove('hidden');
    if (correct) {
      feedbackTitle.innerText = "Great Job!";
      feedbackTitle.style.color = "var(--primary)";
      feedbackMsg.innerText = `Correct! ${item.reason} (+10 Credits)`;
    } else {
      feedbackTitle.innerText = "Oops!";
      feedbackTitle.style.color = "var(--danger)";
      feedbackMsg.innerText = `Not quite. ${item.reason}`;
    }
  }

  nextBtn.addEventListener('click', () => {
    feedbackEl.classList.add('hidden');
    spawnItem();
  });

  spawnItem();
}
