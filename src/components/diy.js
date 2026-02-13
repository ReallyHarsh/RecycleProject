export const diyIdeas = [
    {
        title: 'Plastic Bottle Planter',
        image: 'ph-plant',
        color: '#2ecc71',
        steps: [
            'Cut the bottom third of a plastic bottle.',
            'Poke holes in the bottom for drainage.',
            'Fill with soil and plant seeds.',
            'Decorate with paint!'
        ]
    },
    {
        title: 'Tin Can Pencil Holder',
        image: 'ph-pencil',
        color: '#3498db',
        steps: [
            'Clean a tin can and remove sharp edges.',
            'Wrap with colorful paper or paint.',
            'Use it to store pens, rulers, and scissors.'
        ]
    },
    {
        title: 'Cardboard Box Organizer',
        image: 'ph-package',
        color: '#e67e22',
        steps: [
            'Cut cereal boxes to desired height.',
            'Tape them together to form compartments.',
            'Cover with decorative paper.',
            'Use for drawer organization.'
        ]
    },
    {
        title: 'Jar Lanterns',
        image: 'ph-lightbulb',
        color: '#f1c40f',
        steps: [
            'Clean an old glass jar.',
            'Place a tea light or LED string inside.',
            'Attach a wire handle to hang it.'
        ]
    },
    {
        title: 'T-Shirt Tote Bag',
        image: 'ph-t-shirt',
        color: '#9b59b6',
        steps: [
            'Cut sleeves and neck off an old t-shirt.',
            'Cut fringe at the bottom.',
            'Tie the fringe strips together tightly.',
            'No sewing needed!'
        ]
    }
];

export function renderDIY() {
    return `
    <section id="diy" class="fade-in">
      <header class="hero">
        <h2>DIY Upcycling</h2>
        <p>Give trash a second life with these creative ideas.</p>
      </header>

      <div class="diy-grid">
        ${diyIdeas.map(idea => `
          <div class="card diy-card">
            <div class="diy-icon" style="background-color: ${idea.color}20; color: ${idea.color}">
              <i class="ph ${idea.image}"></i>
            </div>
            <h3>${idea.title}</h3>
            <ol class="diy-steps">
              ${idea.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

export function setupDIY() {
    // No complex logic needed for now, just static rendering
}
