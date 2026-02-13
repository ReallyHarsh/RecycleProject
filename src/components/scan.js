import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

let model = null;
let isModelLoading = true;

const recyclingRules = {
    'bottle': { type: 'Recyclable', bin: 'Blue Bin', advice: 'Empty liquids and crush.' },
    'can': { type: 'Recyclable', bin: 'Blue Bin', advice: 'Rinse out residue.' },
    'carton': { type: 'Recyclable', bin: 'Blue Bin', advice: 'Flatten it.' },
    'paper': { type: 'Recyclable', bin: 'Blue Bin', advice: 'Keep dry.' },
    'cup': { type: 'Check Local', bin: 'Varies', advice: 'Coffee cups represent contamination challenge.' },
    'plastic': { type: 'Recyclable', bin: 'Blue Bin', advice: 'Check number on bottom.' },
    'trash': { type: 'Trash', bin: 'Black Bin', advice: 'When in doubt, throw it out.' }
};

async function loadModel() {
    if (!model) {
        try {
            model = await mobilenet.load();
            isModelLoading = false;
            const statusBtn = document.getElementById('camera-btn');
            if (statusBtn) statusBtn.disabled = false;
            const loadingMsg = document.getElementById('loading-msg');
            if (loadingMsg) loadingMsg.style.display = 'none';
        } catch (e) {
            console.error("Failed to load model", e);
        }
    }
}

export function renderScan() {
    return `
    <section id="scan" class="fade-in">
      <header class="hero">
        <h2>Snap & Sort</h2>
        <p>Point your camera at an item.</p>
      </header>
      <div class="camera-container">
        <div id="loading-msg" class="loading-overlay">Loading AI...</div>
        <video id="webcam" autoplay playsinline muted></video>
        <button id="camera-btn" class="btn camera-trigger" disabled>Evaluate</button>
      </div>
      <div id="scan-result" class="scan-result hidden">
        <h3 id="result-title"></h3>
        <p id="result-desc"></p>
        <button class="btn btn-outline" id="reset-scan">Reset</button>
      </div>
    </section>
  `;
}

export async function setupScan() {
    const video = document.getElementById('webcam');
    const btn = document.getElementById('camera-btn');
    const resultDiv = document.getElementById('scan-result');
    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-desc');
    const resetBtn = document.getElementById('reset-scan');

    loadModel();

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' }
            });
            video.srcObject = stream;
        } catch (err) {
            console.error("Camera error", err);
            resultDiv.classList.remove('hidden');
            resultTitle.textContent = "Camera Error";
            resultDesc.textContent = "Check permissions.";
        }
    }

    btn.addEventListener('click', async () => {
        if (isModelLoading || !model) return;

        btn.innerText = 'Analyzing...';
        try {
            const predictions = await model.classify(video);
            btn.innerText = 'Evaluate';
            showResult(predictions && predictions.length > 0 ? predictions[0] : null);
        } catch (e) {
            console.error(e);
            btn.innerText = 'Error';
        }
    });

    resetBtn.addEventListener('click', () => {
        resultDiv.classList.add('hidden');
        video.play();
    });

    function showResult(prediction) {
        video.pause();
        resultDiv.classList.remove('hidden');

        if (!prediction) {
            resultTitle.innerText = "Unknown";
            resultDesc.innerText = "Try again.";
            return;
        }

        const name = prediction.className.split(',')[0];
        let match = null;

        for (const key in recyclingRules) {
            if (name.toLowerCase().includes(key)) {
                match = recyclingRules[key];
                break;
            }
        }

        if (match) {
            resultTitle.innerText = `${name} (${match.type})`;
            resultDesc.innerHTML = `Bin: ${match.bin}<br>Tip: ${match.advice}`;
        } else {
            resultTitle.innerText = name;
            resultDesc.innerText = "Not in database. Check local rules.";
        }
    }
}
