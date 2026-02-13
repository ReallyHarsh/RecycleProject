(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();function v(e="home"){return`
    <nav class="bottom-nav">
      <a href="#" data-page="home" class="nav-item ${e==="home"?"active":""}">
        <i class="ph ph-house"></i>
        <span>Home</span>
      </a>
      <a href="#guide" data-page="guide" class="nav-item ${e==="guide"?"active":""}">
        <i class="ph ph-book-open"></i>
        <span>Guide</span>
      </a>
      <a href="#diy" data-page="diy" class="nav-item ${e==="diy"?"active":""}">
        <i class="ph ph-hammer"></i>
        <span>DIY</span>
      </a>

      <a href="#game" data-page="game" class="nav-item ${e==="game"?"active":""}">
        <i class="ph ph-game-controller"></i>
        <span>Sort-It</span>
      </a>
      <a href="#voice" data-page="voice" class="nav-item ${e==="voice"?"active":""}">
        <i class="ph ph-microphone"></i>
        <span>Ask</span>
      </a>
    </nav>
  `}function b(e){document.querySelectorAll(".nav-item").forEach(a=>{a.addEventListener("click",l=>{l.preventDefault(),document.querySelectorAll(".nav-item").forEach(t=>t.classList.remove("active")),a.classList.add("active");const o=a.getAttribute("data-page");e(o)})})}function y(){return`
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
  `}function k(){const e=document.getElementById("impact-slider"),a=document.querySelectorAll("#item-count"),l=document.getElementById("impact-result"),o=document.getElementById("simplify-toggle"),t=document.getElementById("home"),s=document.body;let c=!1;const r=()=>{const n=e.value;a.forEach(h=>h.textContent=n);const p=(n*2.5).toFixed(1),m=(n*.05).toFixed(2);c?l.innerHTML=`Conserves <strong>${m} kWh</strong> of energy, equivalent to ${p} hours of laptop usage.`:l.innerHTML=`You power a laptop for <strong>${p} hours</strong>! 💻`};e.addEventListener("input",r),o.addEventListener("change",n=>{c=n.target.checked,c?(t.classList.remove("mode-simple"),t.classList.add("mode-detailed"),s.style.background="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"):(t.classList.remove("mode-detailed"),t.classList.add("mode-simple"),s.style.background="linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)"),r()})}const L=[{id:"paper",category:"Paper",icon:"ph-newspaper",color:"#3498db",items:[{name:"Newspapers",prep:"Keep dry, remove plastic bags",recyclable:!0},{name:"Cardboard",prep:"Flatten, remove tape",recyclable:!0},{name:"Pizza Boxes",prep:"Only if clean; greasy parts to trash",recyclable:!1,note:"Grease contaminates batch"},{name:"Office Paper",prep:"Remove staples/clips",recyclable:!0}]},{id:"plastic",category:"Plastic",icon:"ph-bottle",color:"#e67e22",items:[{name:"PET Bottles (1)",prep:"Empty, rinse, crush",recyclable:!0},{name:"HDPE Jugs (2)",prep:"Rinse, keep caps on if allowed",recyclable:!0},{name:"Plastic Bags",prep:"Take to store drop-off",recyclable:!1,note:"Jams machinery"},{name:"Yogurt Cups (5)",prep:"Rinse thoroughly",recyclable:!0}]},{id:"glass",category:"Glass",icon:"ph-wine",color:"#2ecc71",items:[{name:"Bottles & Jars",prep:"Rinse, remove lids",recyclable:!0},{name:"Broken Glass",prep:"Wrap safely, trash",recyclable:!1,note:"Safety hazard"},{name:"Light Bulbs",prep:"Special disposal needed",recyclable:!1}]},{id:"metal",category:"Metal",icon:"ph-can",color:"#95a5a6",items:[{name:"Aluminum Cans",prep:"Rinse, crush",recyclable:!0},{name:"Tin Cans",prep:"Rinse, place lid inside",recyclable:!0},{name:"Foil",prep:"Clean only; ball up",recyclable:!0}]},{id:"ewaste",category:"E-Waste",icon:"ph-plug",color:"#8e44ad",items:[{name:"Batteries",prep:"Tape ends, special drop-off",recyclable:"special"},{name:"Phones",prep:"Factory reset, e-waste center",recyclable:"special"},{name:"Cables",prep:"Bundle, e-waste center",recyclable:"special"}]}];function w(){return`
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
  `}function E(){const e=document.getElementById("materials-grid"),a=document.getElementById("guide-search");function l(o=""){e.innerHTML="";const t=o.toLowerCase();L.forEach(s=>{const c=s.items.filter(r=>r.name.toLowerCase().includes(t)||s.category.toLowerCase().includes(t));if(c.length>0){const r=document.createElement("div");r.className="category-section",r.innerHTML=`
          <h3 style="color: ${s.color}"><i class="ph ${s.icon}"></i> ${s.category}</h3>
          <div class="items-list">
            ${c.map(n=>`
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
        `,e.appendChild(r)}}),e.innerHTML===""&&(e.innerHTML='<div class="no-results"><p>No items found. Try a different search.</p></div>')}l(),a.addEventListener("input",o=>{l(o.target.value)})}const T=[{title:"Plastic Bottle Planter",image:"ph-plant",color:"#2ecc71",steps:["Cut the bottom third of a plastic bottle.","Poke holes in the bottom for drainage.","Fill with soil and plant seeds.","Decorate with paint!"]},{title:"Tin Can Pencil Holder",image:"ph-pencil",color:"#3498db",steps:["Clean a tin can and remove sharp edges.","Wrap with colorful paper or paint.","Use it to store pens, rulers, and scissors."]},{title:"Cardboard Box Organizer",image:"ph-package",color:"#e67e22",steps:["Cut cereal boxes to desired height.","Tape them together to form compartments.","Cover with decorative paper.","Use for drawer organization."]},{title:"Jar Lanterns",image:"ph-lightbulb",color:"#f1c40f",steps:["Clean an old glass jar.","Place a tea light or LED string inside.","Attach a wire handle to hang it."]},{title:"T-Shirt Tote Bag",image:"ph-t-shirt",color:"#9b59b6",steps:["Cut sleeves and neck off an old t-shirt.","Cut fringe at the bottom.","Tie the fringe strips together tightly.","No sewing needed!"]}];function x(){return`
    <section id="diy" class="fade-in">
      <header class="hero">
        <h2>DIY Upcycling</h2>
        <p>Give trash a second life with these creative ideas.</p>
      </header>

      <div class="diy-grid">
        ${T.map(e=>`
          <div class="card diy-card">
            <div class="diy-icon" style="background-color: ${e.color}20; color: ${e.color}">
              <i class="ph ${e.image}"></i>
            </div>
            <h3>${e.title}</h3>
            <ol class="diy-steps">
              ${e.steps.map(a=>`<li>${a}</li>`).join("")}
            </ol>
          </div>
        `).join("")}
      </div>
    </section>
  `}const g=[{name:"Pizza Box (Greasy)",type:"trash",icon:"ph-pizza",reason:"Grease contaminates paper recycling."},{name:"Chip Bag",type:"trash",icon:"ph-cookie",reason:"Multi-layer material (foil+plastic) is hard to separate."},{name:"Styrofoam Cup",type:"trash",icon:"ph-coffee",reason:"Styrofoam is rarely recyclable in curbside programs."},{name:"Broken Glass",type:"trash",icon:"ph-wine",reason:"Broken glass is a safety hazard for sorters."},{name:"Used Napkin",type:"trash",icon:"ph-toilet-paper",reason:"Soiled paper cannot be recycled."},{name:"Plastic Straw",type:"trash",icon:"ph-coffee",reason:"Too small/light for machines to sort."},{name:"Plastic Bottle",type:"recycle",icon:"ph-bottle",reason:"PET plastic is highly recyclable! Keep cap on."},{name:"Soda Can",type:"recycle",icon:"ph-can",reason:"Aluminum can be recycled infinitely."},{name:"Newspaper",type:"recycle",icon:"ph-newspaper",reason:"Clean paper is perfect for recycling."},{name:"Cereal Box",type:"recycle",icon:"ph-package",reason:"Cardboard is valuable. Flatten it first."},{name:"Glass Jar",type:"recycle",icon:"ph-jar-label",reason:"Rinse it out. Glass is easily recycled."},{name:"Shampoo Bottle",type:"recycle",icon:"ph-drop",reason:"HDPE plastic is very recyclable. Rinse it."},{name:"Soup Can",type:"recycle",icon:"ph-cylinder",reason:"Steel cans are magnetic and easy to sort."},{name:"Milk Carton",type:"recycle",icon:"ph-brandy",reason:"Cartons are recyclable in most modern facilities."},{name:"Apple Core",type:"compost",icon:"ph-apple-logo",reason:"Organic waste creates nutrient-rich compost."},{name:"Banana Peel",type:"compost",icon:"ph-smiley",reason:"Fruit peels decompose quickly."},{name:"Egg Shells",type:"compost",icon:"ph-egg",reason:"Add calcium to your compost pile."},{name:"Coffee Grounds",type:"compost",icon:"ph-coffee-bean",reason:"Great nitrogen source for compost."},{name:"Tea Bag",type:"compost",icon:"ph-tea-bag",reason:"Paper tea bags are compostable (remove staple)."},{name:"Dead Leaves",type:"compost",icon:"ph-leaf",reason:"Yard waste is perfect carbon for compost."}];function B(){return`
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
  `}function C(){let e=0,a=null;const l=document.getElementById("score"),o=document.getElementById("spawner"),t=document.getElementById("feedback"),s=document.getElementById("feedback-title"),c=document.getElementById("feedback-msg"),r=document.getElementById("next-btn");function n(){const i=g[Math.floor(Math.random()*g.length)];a=i,o.innerHTML=`
      <div class="current-item" draggable="true" id="draggable-item">
        <i class="ph ${i.icon}"></i>
        <span>${i.name}</span>
      </div>
    `;const d=document.getElementById("draggable-item");d.addEventListener("dragstart",u=>{u.dataTransfer.setData("text/plain",i.type),d.style.opacity="0.5"}),d.addEventListener("dragend",()=>{d.style.opacity="1"}),d.addEventListener("click",()=>{})}document.querySelectorAll(".bin").forEach(i=>{i.addEventListener("dragover",d=>{d.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>{i.classList.remove("drag-over")}),i.addEventListener("drop",d=>{d.preventDefault(),i.classList.remove("drag-over"),d.dataTransfer.getData("text/plain");const u=i.getAttribute("data-type");m(u)}),i.addEventListener("click",()=>{a&&m(i.getAttribute("data-type"))})});function m(i){a&&(i===a.type?(e+=10,l.innerText=e,h(!0,a)):h(!1,a),o.innerHTML="",a=null)}function h(i,d){t.classList.remove("hidden"),i?(s.innerText="Great Job!",s.style.color="var(--primary)",c.innerText=`Correct! ${d.reason} (+10 Credits)`):(s.innerText="Oops!",s.style.color="var(--danger)",c.innerText=`Not quite. ${d.reason}`)}r.addEventListener("click",()=>{t.classList.add("hidden"),n()}),n()}function I(){return`
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
  `}function S(){const e=document.getElementById("mic-btn"),a=document.getElementById("listening-status"),l=document.getElementById("transcript-box"),o=document.getElementById("transcript-text"),t=document.getElementById("ai-answer");if(!("webkitSpeechRecognition"in window)){a.innerText="Voice not supported in this browser.",e.disabled=!0;return}const s=new webkitSpeechRecognition;s.continuous=!1,s.lang="en-US",e.addEventListener("click",()=>{s.start(),e.classList.add("listening"),a.innerText="Listening...",l.classList.add("hidden")}),s.onresult=r=>{const n=r.results[0][0].transcript;o.innerText=n,a.innerText="Processing...",e.classList.remove("listening"),l.classList.remove("hidden"),c(n)},s.onerror=r=>{a.innerText="Error: "+r.error,e.classList.remove("listening")},s.onend=()=>{e.classList.remove("listening"),a.innerText==="Listening..."&&(a.innerText="Tap mic to speak")};function c(r){const n=r.toLowerCase();let p="I'm not sure about that item. Please check the Guide.";n.includes("battery")||n.includes("batteries")?p="Batteries cannot go in regular bins. They are e-waste/hazardous. Look for a battery drop-off point.":n.includes("pizza")?p="Pizza boxes are tricky! Grease contaminates paper recycling. Tear off the clean lid to recycle, trash the greasy bottom.":n.includes("plastic bag")?p="Plastic bags jam recycling machines. Take them to a grocery store drop-off bin.":n.includes("can")||n.includes("aluminum")?p="Aluminum cans are infinitely recyclable! Rinse them out and put them in the blue bin.":n.includes("glass")?p="Glass is recyclable. Rinse it out. Careful not to break it.":(n.includes("plastic")&&(p="Check the number on the bottom (1, 2, 5 are usually safe). Rinse it."),n.includes("paper")&&(p="Make sure it's clean and dry.")),t.innerText=p;const m=new SpeechSynthesisUtterance(p);window.speechSynthesis.speak(m),a.innerText="Tap mic to speak"}}const $=document.querySelector("#app");function f(e){let a="";switch(e){case"home":a=y();break;case"guide":a=w();break;case"diy":a=x();break;case"game":a=B();break;case"voice":a=I();break;default:a=y()}$.innerHTML=`
    <main class="container">
      ${a}
    </main>
    ${v(e)}
  `,b(f),(e==="home"||!e)&&k(),e==="guide"&&E(),e==="game"&&C(),e==="voice"&&S()}f("home");
