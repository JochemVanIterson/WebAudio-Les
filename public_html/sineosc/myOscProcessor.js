class MyOscProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors () {
    return [
      // TODO: Describe custom parameters
      {
        name: "gain",
        defaultValue: 0.5,
        minValue: 0,
        maxValue: 1
      },{
        name: 'frequency',
        defaultValue: 440,
        minValue: 0,
        maxValue: 44100,
        automationRate: 'k-rate'
      }
    ]
  }
  constructor (options) {
    super()
    this.phase = 0
  }

  process (inputs, outputs, parameters) {
    const output = outputs[0]
    const input = inputs[0]
    // TODO: Implement oscillator
    const phaseStep = parameters.frequency / sampleRate
    output.forEach((channel, channelIndex) => {
      for (let i = 0; i < channel.length; i++) {
        this.phase += phaseStep;
        const newSample = Math.sin(this.phase * Math.PI * 2.0);
        channel[i] = newSample * parameters.gain
      }
    })
    return true
  }
}

registerProcessor('my-osc', MyOscProcessor)