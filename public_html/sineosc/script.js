import MyOscNode from './myOscNode.js'
let audioContext;
let myOscNode;

/**
 * Function that initialized the web audio system
 */
async function initWebAudioScript() {
    console.log('Sine oscillator script started')

    // Resume audiocontext after click
    document.addEventListener('click', function() {
        if (audioContext && audioContext.state === 'suspended') audioContext.resume();
    }, false);

    audioContext = new AudioContext({ sampleRate: 44100 })
    await audioContext.audioWorklet.addModule('myOscProcessor.js')
    myOscNode = new MyOscNode(audioContext, 440)
}

/**
 * Set the playback state of the audio file
 * @param {Boolean} state Whether the audio file should be playing or not
 */
function setPlaybackState(state) {
    const buttonElement = document.getElementById('playbackStateButton')
    buttonElement.classList.toggle('btn-primary', state)
    buttonElement.classList.toggle('btn-outline-primary', !state)
    buttonElement.innerText = state?'Running':'Stopped'
    
    console.log('setPlaybackState', state)

    // TODO: Implementation of sound source state change
}

/**
 * Handles the gain slider
 * @param {Number} value New value of the gain (inputs as 0-100)
 */
function setGainValue(value) {
    value /= 100.
    const valueElement = document.getElementById('gainValue')
    valueElement.innerText = value
    
    console.log('setGainValue', value)

    // TODO: Implementation of gain value change
}

/**
 * Handles the oscillator frequency slider
 * @param {Number} value New value of the frequency (inputs as 0-5000)
 */
function setOscillatorFreqValue(value) {
    const valueElement = document.getElementById('oscillatorFreqValue')
    valueElement.innerText = value
    
    console.log('setOscillatorFreqValue', value)

    // TODO: Implementation of oscillator frequency value change
}

(function() {
    initWebAudioScript()
    const playbackStateButton = document.getElementById('playbackStateButton')
    const gainRange = document.getElementById('gainRange')
    const oscillatorFreqRange = document.getElementById('oscillatorFreqRange')
    playbackStateButton.addEventListener('click', (event) => {
        setPlaybackState(!event.target.classList.contains('btn-primary'))
    })
    gainRange.addEventListener('input', (event) => {
        setGainValue(event.target.value)
    })
    oscillatorFreqRange.addEventListener('input', (event) => {
        setOscillatorFreqValue(event.target.value)
    })
})();