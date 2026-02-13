export function renderVoice() {
    return `
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
  `;
}

export function setupVoice() {
    const micBtn = document.getElementById('mic-btn');
    const statusEl = document.getElementById('listening-status');
    const transcriptBox = document.getElementById('transcript-box');
    const transcriptText = document.getElementById('transcript-text');
    const aiAnswer = document.getElementById('ai-answer');

    if (!('webkitSpeechRecognition' in window)) {
        statusEl.innerText = "Voice not supported in this browser.";
        micBtn.disabled = true;
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    micBtn.addEventListener('click', () => {
        recognition.start();
        micBtn.classList.add('listening');
        statusEl.innerText = "Listening...";
        transcriptBox.classList.add('hidden');
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        transcriptText.innerText = transcript;
        statusEl.innerText = "Processing...";
        micBtn.classList.remove('listening');

        transcriptBox.classList.remove('hidden');
        generateAnswer(transcript);
    };

    recognition.onerror = (event) => {
        statusEl.innerText = "Error: " + event.error;
        micBtn.classList.remove('listening');
    };

    recognition.onend = () => {
        micBtn.classList.remove('listening');
        if (statusEl.innerText === "Listening...") {
            statusEl.innerText = "Tap mic to speak";
        }
    };

    function generateAnswer(query) {
        const lowerQ = query.toLowerCase();
        let answer = "I'm not sure about that item. Please check the Guide.";

        // Simple Keyword matching (Local RAG simulation)
        if (lowerQ.includes('battery') || lowerQ.includes('batteries')) {
            answer = "Batteries cannot go in regular bins. They are e-waste/hazardous. Look for a battery drop-off point.";
        } else if (lowerQ.includes('pizza')) {
            answer = "Pizza boxes are tricky! Grease contaminates paper recycling. Tear off the clean lid to recycle, trash the greasy bottom.";
        } else if (lowerQ.includes('plastic bag')) {
            answer = "Plastic bags jam recycling machines. Take them to a grocery store drop-off bin.";
        } else if (lowerQ.includes('can') || lowerQ.includes('aluminum')) {
            answer = "Aluminum cans are infinitely recyclable! Rinse them out and put them in the blue bin.";
        } else if (lowerQ.includes('glass')) {
            answer = "Glass is recyclable. Rinse it out. Careful not to break it.";
        } else {
            // use basic rules from scan.js logic logic effectively
            if (lowerQ.includes('plastic')) answer = "Check the number on the bottom (1, 2, 5 are usually safe). Rinse it.";
            if (lowerQ.includes('paper')) answer = "Make sure it's clean and dry.";
        }

        aiAnswer.innerText = answer;

        // Speak response
        const utterance = new SpeechSynthesisUtterance(answer);
        window.speechSynthesis.speak(utterance);

        statusEl.innerText = "Tap mic to speak";
    }
}
