export const materials = [
    {
        id: 'paper',
        category: 'Paper',
        icon: 'ph-newspaper',
        color: '#3498db',
        items: [
            { name: 'Newspapers', prep: 'Keep dry, remove plastic bags', recyclable: true },
            { name: 'Cardboard', prep: 'Flatten, remove tape', recyclable: true },
            { name: 'Pizza Boxes', prep: 'Only if clean; greasy parts to trash', recyclable: false, note: 'Grease contaminates batch' },
            { name: 'Office Paper', prep: 'Remove staples/clips', recyclable: true }
        ]
    },
    {
        id: 'plastic',
        category: 'Plastic',
        icon: 'ph-bottle',
        color: '#e67e22',
        items: [
            { name: 'PET Bottles (1)', prep: 'Empty, rinse, crush', recyclable: true },
            { name: 'HDPE Jugs (2)', prep: 'Rinse, keep caps on if allowed', recyclable: true },
            { name: 'Plastic Bags', prep: 'Take to store drop-off', recyclable: false, note: 'Jams machinery' },
            { name: 'Yogurt Cups (5)', prep: 'Rinse thoroughly', recyclable: true }
        ]
    },
    {
        id: 'glass',
        category: 'Glass',
        icon: 'ph-wine',
        color: '#2ecc71',
        items: [
            { name: 'Bottles & Jars', prep: 'Rinse, remove lids', recyclable: true },
            { name: 'Broken Glass', prep: 'Wrap safely, trash', recyclable: false, note: 'Safety hazard' },
            { name: 'Light Bulbs', prep: 'Special disposal needed', recyclable: false }
        ]
    },
    {
        id: 'metal',
        category: 'Metal',
        icon: 'ph-can',
        color: '#95a5a6',
        items: [
            { name: 'Aluminum Cans', prep: 'Rinse, crush', recyclable: true },
            { name: 'Tin Cans', prep: 'Rinse, place lid inside', recyclable: true },
            { name: 'Foil', prep: 'Clean only; ball up', recyclable: true }
        ]
    },
    {
        id: 'ewaste',
        category: 'E-Waste',
        icon: 'ph-plug',
        color: '#8e44ad',
        items: [
            { name: 'Batteries', prep: 'Tape ends, special drop-off', recyclable: "special" },
            { name: 'Phones', prep: 'Factory reset, e-waste center', recyclable: "special" },
            { name: 'Cables', prep: 'Bundle, e-waste center', recyclable: "special" }
        ]
    }
];
