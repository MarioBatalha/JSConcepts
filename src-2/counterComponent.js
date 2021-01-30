const BTN_RESTART = 'btnRestart'
const ID_COUNTER = 'counter'
const COUNTER_VALUE = 100
const INTERVAL_PERIOD = 10

class counterComponent {
    constructor() {
        this.initializer()
    }
    prepareCounterProxy() {
        const handler = {
            set: (currentContext, properKey, newValue) => {
                console.log(currentContext, properKey, newValue)

                currentContext[properKey] = newValue
                return true
            }
        }
        const counter = new Proxy({
            value: COUNTER_VALUE,
            stopEffect: () => {}
        }, handler)

        return counter
    }

    updateText = ({
        counterElement,
        counter
    }) => () => {
        const identifyText = '$$counter'
        const textDefault = `Começando em <strong>${identifyText}</strong> segundos...`
        counterElement.innerHTML = textDefault.replace(identifyText, counter.value--)
    }

    initializer() {
        const counterElement = document.getElementById(ID_COUNTER)

        const counter = this.prepareCounterProxy()
        // counter.value = 100
        // counter.value = 90
        // counter.value = 80

        const arguments = {
            counterElement,
            counter
        }
        // this.updateText(arguments)
        // this.updateText(arguments)
        // this.updateText(arguments)

        const fn = this.updateText(arguments)
        setInterval(fn, INTERVAL_PERIOD)

    }
}