radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("worst trombone player ever")
})
radio.setGroup(6)
