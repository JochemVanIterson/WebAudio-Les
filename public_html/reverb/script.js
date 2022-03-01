let audioContext;
let audioElement;
let sourceNode;
let gainNode;
let convolverNode;

/**
 * Function that initialized the web audio system
 */
function initWebAudioScript() {
    console.log('reverb script started')

    // Resume audiocontext after click
    document.addEventListener('click', function() {
        if (audioContext && audioContext.state === 'suspended') audioContext.resume();
    }, false);
    
    audioContext = new AudioContext({ sampleRate: 44100 })

    // TODO: Implement gain node

    audioElement = document.createElement('audio')
    audioElement.setAttribute('src', '../assets/audioFiles/drumLoop.mp3')
    audioElement.setAttribute('loop', true)
    // TODO: Implement HTML5 DOM -> WebAudio node
    
    // TODO: Implement convolution node
    loadConvolutionReverb()
}

async function loadConvolutionReverb() {
    let response     = await fetch("../assets/audioFiles/impulse-response.wav");
    let arraybuffer  = await response.arrayBuffer();
    convolverNode.buffer = await audioContext.decodeAudioData(arraybuffer);

    // TODO: Implement connect of convolution node
    
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

    if (state) audioElement.play()
    else audioElement.pause()
}

/**
 * Set the reverb state
 * @param {Boolean} state Whether the reverb should be enabled or not
 */
function setReverbState(state) {
    const buttonElement = document.getElementById('setReverbButton')
    buttonElement.classList.toggle('btn-primary', state)
    buttonElement.classList.toggle('btn-outline-primary', !state)
    buttonElement.innerText = state?'Enabled':'Disabled'
    
    console.log('setReverbState', state)

    // TODO: Implement reverb node state change
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

(function() {
    initWebAudioScript()
    const playbackStateButton = document.getElementById('playbackStateButton')
    const setReverbButton = document.getElementById('setReverbButton')
    const gainRange = document.getElementById('gainRange')
    playbackStateButton.addEventListener('click', (event) => {
        setPlaybackState(!event.target.classList.contains('btn-primary'))
    })
    setReverbButton.addEventListener('click', (event) => {
        setReverbState(!event.target.classList.contains('btn-primary'))
    })
    gainRange.addEventListener('input', (event) => {
        setGainValue(event.target.value)
    })
})();