input.onButtonPressed(Button.A, function () {
    basic.showNumber(Min)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Max)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Homerseklet)
})
let Homerseklet = 0
let Max = 0
let Min = 0
Min = 50
Max = 0
loops.everyInterval(900000, function () {
    Homerseklet = input.temperature()
    if (Min > Homerseklet) {
        Min = Homerseklet
    }
    if (Max < Homerseklet) {
        Max = Homerseklet
    }
})
