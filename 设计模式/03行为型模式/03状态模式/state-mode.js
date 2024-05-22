/**
 * 状态模式
 */
!(function () {
    class weakLightState {
        constructor(light) {
            this.light = light;
        }

        buttonWasPressed() {
            console.log("弱光");
            this.light.setState(this.light.weakLightState);
        }
    }

    class strongLightState {
        constructor(light) {
            this.light = light;
        }

        buttonWasPressed() {
            console.log("强光");
            this.light.setState(this.light.strongLightState);
        }
    }

    class Light {
        constructor() {
            this.weakLightState = new weakLightState(this);
            this.strongLightState = new strongLightState(this);
        }

        setState(state) {
            this.state = state;
        }

        getState() {
            console.log("状态为"+this.state)
            return this.state;
        }

        init() {
            this.state = this.strongLightState;
            this.state.buttonWasPressed();
        }
    }

    let light = new Light()
    light.init();
    light.getState();

    let light2 = new Light()
    let weakLightState1 = new weakLightState(light2);
    weakLightState1.buttonWasPressed();
    light2.getState();

})()
