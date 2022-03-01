export default class MyOscNode extends AudioWorkletNode {
    constructor(context, defaultFrequency) {
        super(context, 'my-osc', {
            numberOfInputs: 1,
            numberOfOutputs: 1,
            channelCount: 1,
            parameterData: {
                // TODO: Implement default value for custom parameters (gain and frequency)
                gain: 0.5,
                frequency: defaultFrequency,
            }
        })
        // TODO: Bind custom parameters to node
        this.freqParam = this.parameters.get('frequency')
        this.gainParam = this.parameters.get('gain')
    }
    
    // TODO: Create getters and setters for the new parameters
    get frequency() {
        return freqParam.value
    }
    set frequency(val) {
        this.freqParam.setValueAtTime(val, this.context.currentTime)
    }
    get gain() {
        return freqParam.value
    }
    set gain(val) {
        this.gainParam.setValueAtTime(val, this.context.currentTime)
    }
}