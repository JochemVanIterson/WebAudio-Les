class MyOscProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors () {
    return [
      // TODO: Describe custom parameters
    ]
  }
  constructor (options) {
    super()
  }

  process (inputs, outputs, parameters) {
    const output = outputs[0]
    const input = inputs[0]
    // TODO: Implement oscillator
    output.forEach((channel, channelIndex) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = 0
      }
    })
    return true
  }
}

registerProcessor('my-osc', MyOscProcessor)