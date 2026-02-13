(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=l(s);fetch(s.href,t)}})();function b(){return`
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
  `}function v(a){document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",l=>{l.preventDefault(),document.querySelectorAll(".nav-item").forEach(s=>s.classList.remove("active")),e.classList.add("active");const r=e.getAttribute("data-page");a(r)})})}function g(){return`
    <section id="home">
      <header class="hero">
        <div class="bounce-enticement">
          <i class="ph ph-recycle"></i>
        </div>
        <h1 class="hero-animate">Turn Waste into Worth</h1>
        <p class="subtitle hero-animate delay-1" id="hero-text">Recycling isn't just about trash—it's about our future. Keep it simple, keep it green.</p>
        <div class="toggle-container hero-animate delay-2">

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
  `}function w(){const a=document.getElementById("impact-slider"),e=document.getElementById("item-count"),l=document.getElementById("impact-result"),r=document.getElementById("simplify-toggle"),s=document.getElementById("hero-text");a.addEventListener("input",t=>{const o=t.target.value;e.textContent=o;const c=(o*2.5).toFixed(1);l.innerHTML=`You save enough energy to power a laptop for <strong>${c} hours</strong>!`}),r.addEventListener("change",t=>{t.target.checked?s.textContent="Recycling reduces the need for extracting, refining, and processing raw materials all of which create potential for substantial air and water pollution.":s.textContent="Recycling isn't just about trash—it's about our future. Keep it simple, keep it green."})}const k=[{id:"paper",category:"Paper",icon:"ph-newspaper",color:"#3498db",items:[{name:"Newspapers",prep:"Keep dry, remove plastic bags",recyclable:!0},{name:"Cardboard",prep:"Flatten, remove tape",recyclable:!0},{name:"Pizza Boxes",prep:"Only if clean; greasy parts to trash",recyclable:!1,note:"Grease contaminates batch"},{name:"Office Paper",prep:"Remove staples/clips",recyclable:!0}]},{id:"plastic",category:"Plastic",icon:"ph-bottle",color:"#e67e22",items:[{name:"PET Bottles (1)",prep:"Empty, rinse, crush",recyclable:!0},{name:"HDPE Jugs (2)",prep:"Rinse, keep caps on if allowed",recyclable:!0},{name:"Plastic Bags",prep:"Take to store drop-off",recyclable:!1,note:"Jams machinery"},{name:"Yogurt Cups (5)",prep:"Rinse thoroughly",recyclable:!0}]},{id:"glass",category:"Glass",icon:"ph-wine",color:"#2ecc71",items:[{name:"Bottles & Jars",prep:"Rinse, remove lids",recyclable:!0},{name:"Broken Glass",prep:"Wrap safely, trash",recyclable:!1,note:"Safety hazard"},{name:"Light Bulbs",prep:"Special disposal needed",recyclable:!1}]},{id:"metal",category:"Metal",icon:"ph-can",color:"#95a5a6",items:[{name:"Aluminum Cans",prep:"Rinse, crush",recyclable:!0},{name:"Tin Cans",prep:"Rinse, place lid inside",recyclable:!0},{name:"Foil",prep:"Clean only; ball up",recyclable:!0}]},{id:"ewaste",category:"E-Waste",icon:"ph-plug",color:"#8e44ad",items:[{name:"Batteries",prep:"Tape ends, special drop-off",recyclable:"special"},{name:"Phones",prep:"Factory reset, e-waste center",recyclable:"special"},{name:"Cables",prep:"Bundle, e-waste center",recyclable:"special"}]}];function E(){return`
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
  `}function L(){const a=document.getElementById("materials-grid"),e=document.getElementById("guide-search");function l(r=""){a.innerHTML="";const s=r.toLowerCase();k.forEach(t=>{const o=t.items.filter(c=>c.name.toLowerCase().includes(s)||t.category.toLowerCase().includes(s));if(o.length>0){const c=document.createElement("div");c.className="category-section",c.innerHTML=`
          <h3 style="color: ${t.color}"><i class="ph ${t.icon}"></i> ${t.category}</h3>
          <div class="items-list">
            ${o.map(n=>`
              <div class="item-card ${n.recyclable?"":"not-recyclable"} ${n.recyclable==="special"?"special-recyclable":""}">
                <div class="item-header">
                  <h4>${n.name}</h4>
                  ${n.recyclable===!0?'<span class="tag yes">Recycle</span>':n.recyclable==="special"?'<span class="tag special">Special</span>':'<span class="tag no">Trash</span>'}
                </div>
                <p class="prep-text"><i class="ph ph-check-circle"></i> ${n.prep}</p>
                ${n.note?`<p class="note-text"><i class="ph ph-info"></i> ${n.note}</p>`:""}
              </div>
            `).join("")}
          </div>
        `,a.appendChild(c)}}),a.innerHTML===""&&(a.innerHTML='<div class="no-results"><p>No items found. Try a different search.</p></div>')}l(),e.addEventListener("input",r=>{l(r.target.value)})}const T=[{title:"Plastic Bottle Planter",image:"ph-plant",color:"#2ecc71",steps:["Cut the bottom third of a plastic bottle.","Poke holes in the bottom for drainage.","Fill with soil and plant seeds.","Decorate with paint!"]},{title:"Tin Can Pencil Holder",image:"ph-pencil",color:"#3498db",steps:["Clean a tin can and remove sharp edges.","Wrap with colorful paper or paint.","Use it to store pens, rulers, and scissors."]},{title:"Cardboard Box Organizer",image:"ph-package",color:"#e67e22",steps:["Cut cereal boxes to desired height.","Tape them together to form compartments.","Cover with decorative paper.","Use for drawer organization."]},{title:"Jar Lanterns",image:"ph-lightbulb",color:"#f1c40f",steps:["Clean an old glass jar.","Place a tea light or LED string inside.","Attach a wire handle to hang it."]},{title:"T-Shirt Tote Bag",image:"ph-t-shirt",color:"#9b59b6",steps:["Cut sleeves and neck off an old t-shirt.","Cut fringe at the bottom.","Tie the fringe strips together tightly.","No sewing needed!"]}];function x(){return`
    <section id="diy" class="fade-in">
      <header class="hero">
        <h2>DIY Upcycling</h2>
        <p>Give trash a second life with these creative ideas.</p>
      </header>

      <div class="diy-grid">
        ${T.map(a=>`
          <div class="card diy-card">
            <div class="diy-icon" style="background-color: ${a.color}20; color: ${a.color}">
              <i class="ph ${a.image}"></i>
            </div>
            <h3>${a.title}</h3>
            <ol class="diy-steps">
              ${a.steps.map(e=>`<li>${e}</li>`).join("")}
            </ol>
          </div>
        `).join("")}
      </div>
    </section>
  `}const y=[{name:"Pizza Box (Greasy)",type:"trash",icon:"ph-pizza",reason:"Grease contaminates paper recycling."},{name:"Chip Bag",type:"trash",icon:"ph-cookie",reason:"Multi-layer material (foil+plastic) is hard to separate."},{name:"Styrofoam Cup",type:"trash",icon:"ph-coffee",reason:"Styrofoam is rarely recyclable in curbside programs."},{name:"Broken Glass",type:"trash",icon:"ph-wine",reason:"Broken glass is a safety hazard for sorters."},{name:"Used Napkin",type:"trash",icon:"ph-toilet-paper",reason:"Soiled paper cannot be recycled."},{name:"Plastic Straw",type:"trash",icon:"ph-coffee",reason:"Too small/light for machines to sort."},{name:"Plastic Bottle",type:"recycle",icon:"ph-bottle",reason:"PET plastic is highly recyclable! Keep cap on."},{name:"Soda Can",type:"recycle",icon:"ph-can",reason:"Aluminum can be recycled infinitely."},{name:"Newspaper",type:"recycle",icon:"ph-newspaper",reason:"Clean paper is perfect for recycling."},{name:"Cereal Box",type:"recycle",icon:"ph-package",reason:"Cardboard is valuable. Flatten it first."},{name:"Glass Jar",type:"recycle",icon:"ph-jar-label",reason:"Rinse it out. Glass is easily recycled."},{name:"Shampoo Bottle",type:"recycle",icon:"ph-drop",reason:"HDPE plastic is very recyclable. Rinse it."},{name:"Soup Can",type:"recycle",icon:"ph-cylinder",reason:"Steel cans are magnetic and easy to sort."},{name:"Milk Carton",type:"recycle",icon:"ph-brandy",reason:"Cartons are recyclable in most modern facilities."},{name:"Apple Core",type:"compost",icon:"ph-apple-logo",reason:"Organic waste creates nutrient-rich compost."},{name:"Banana Peel",type:"compost",icon:"ph-smiley",reason:"Fruit peels decompose quickly."},{name:"Egg Shells",type:"compost",icon:"ph-egg",reason:"Add calcium to your compost pile."},{name:"Coffee Grounds",type:"compost",icon:"ph-coffee-bean",reason:"Great nitrogen source for compost."},{name:"Tea Bag",type:"compost",icon:"ph-tea-bag",reason:"Paper tea bags are compostable (remove staple)."},{name:"Dead Leaves",type:"compost",icon:"ph-leaf",reason:"Yard waste is perfect carbon for compost."}];function B(){return`
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
  `}function C(){let a=0,e=null;const l=document.getElementById("score"),r=document.getElementById("spawner"),s=document.getElementById("feedback"),t=document.getElementById("feedback-title"),o=document.getElementById("feedback-msg"),c=document.getElementById("next-btn");function n(){const i=y[Math.floor(Math.random()*y.length)];e=i,r.innerHTML=`
      <div class="current-item" draggable="true" id="draggable-item">
        <i class="ph ${i.icon}"></i>
        <span>${i.name}</span>
      </div>
    `;const p=document.getElementById("draggable-item");p.addEventListener("dragstart",h=>{h.dataTransfer.setData("text/plain",i.type),p.style.opacity="0.5"}),p.addEventListener("dragend",()=>{p.style.opacity="1"}),p.addEventListener("click",()=>{})}document.querySelectorAll(".bin").forEach(i=>{i.addEventListener("dragover",p=>{p.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",p=>{p.preventDefault(),i.classList.remove("drag-over"),p.dataTransfer.getData("text/plain");const h=i.getAttribute("data-type");m(h)}),i.addEventListener("click",()=>{e&&m(i.getAttribute("data-type"))})});function m(i){e&&(i===e.type?(a+=10,l.innerText=a,u(!0,e)):u(!1,e),r.innerHTML="",e=null)}function u(i,p){s.classList.remove("hidden"),i?(t.innerText="Great Job!",t.style.color="var(--primary)",o.innerText=`Correct! ${p.reason} (+10 Credits)`):(t.innerText="Oops!",t.style.color="var(--danger)",o.innerText=`Not quite. ${p.reason}`)}c.addEventListener("click",()=>{s.classList.add("hidden"),n()}),n()}function I(){return`
    <section id="voice" class="fade-in">
      <header class="hero">
        <h2>Local AI Helper</h2>
        <p>Ask a question about recycling.</p>
      </header>

      <div class="voice-container">
        <button id="mic-btn" class="mic-btn">
          <i class="ph ph-microphone"></i>
        </button>
        <p id="listening-status">Tap mic to speak</p>
        
        <div id="transcript-box" class="transcript-box hidden">
          <p><strong>You asked:</strong> "<span id="transcript-text"></span>"</p>
          <div class="ai-response">
            <i class="ph ph-robot"></i>
            <p id="ai-answer">Thinking...</p>
          </div>
        </div>
      </div>
    </section>
  `}function P(){const a=document.getElementById("mic-btn"),e=document.getElementById("listening-status"),l=document.getElementById("transcript-box"),r=document.getElementById("transcript-text"),s=document.getElementById("ai-answer");if(!("webkitSpeechRecognition"in window)){e.innerText="Voice not supported in this browser.",a.disabled=!0;return}const t=new webkitSpeechRecognition;t.continuous=!1,t.lang="en-US",a.addEventListener("click",()=>{t.start(),a.classList.add("listening"),e.innerText="Listening...",l.classList.add("hidden")}),t.onresult=c=>{const n=c.results[0][0].transcript;r.innerText=n,e.innerText="Processing...",a.classList.remove("listening"),l.classList.remove("hidden"),o(n)},t.onerror=c=>{e.innerText="Error: "+c.error,a.classList.remove("listening")},t.onend=()=>{a.classList.remove("listening"),e.innerText==="Listening..."&&(e.innerText="Tap mic to speak")};function o(c){const n=c.toLowerCase();let d="I'm not sure about that item. Please check the Guide.";n.includes("battery")||n.includes("batteries")?d="Batteries cannot go in regular bins. They are e-waste/hazardous. Look for a battery drop-off point.":n.includes("pizza")?d="Pizza boxes are tricky! Grease contaminates paper recycling. Tear off the clean lid to recycle, trash the greasy bottom.":n.includes("plastic bag")?d="Plastic bags jam recycling machines. Take them to a grocery store drop-off bin.":n.includes("can")||n.includes("aluminum")?d="Aluminum cans are infinitely recyclable! Rinse them out and put them in the blue bin.":n.includes("glass")?d="Glass is recyclable. Rinse it out. Careful not to break it.":(n.includes("plastic")&&(d="Check the number on the bottom (1, 2, 5 are usually safe). Rinse it."),n.includes("paper")&&(d="Make sure it's clean and dry.")),s.innerText=d;const m=new SpeechSynthesisUtterance(d);window.speechSynthesis.speak(m),e.innerText="Tap mic to speak"}}const S=document.querySelector("#app");function f(a){let e="";switch(a){case"home":e=g();break;case"guide":e=E();break;case"diy":e=x();break;case"game":e=B();break;case"voice":e=I();break;default:e=g()}S.innerHTML=`
    <main class="container">
      ${e}
    </main>
    ${b()}
  `,v(f),(a==="home"||!a)&&w(),a==="guide"&&L(),a==="game"&&C(),a==="voice"&&P()}f("home");
