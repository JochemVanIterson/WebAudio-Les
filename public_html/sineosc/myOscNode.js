export default class MyOscNode extends AudioWorkletNode {
    constructor(context, defaultFrequency) {
        super(context, 'my-osc', {
            numberOfInputs: 1,
            numberOfOutputs: 1,
            channelCount: 1,
            parameterData: {
                // TODO: Implement default value for custom parameters (gain and frequency)
            }
        })
        // TODO: Bind custom parameters to node
    }
    
    // TODO: Create getters and setters for the new parameters
}