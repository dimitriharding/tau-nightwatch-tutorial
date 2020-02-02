module.exports = {
    "Should perform key strokes": (client) => {
        client
        .url('https://ultimateqa.com/filling-out-forms/')
        .setValue('#et_pb_contact_message_0', 'testing key strokes')
        .keys(client.Keys.BACK_SPACE)
        .keys(client.Keys.BACK_SPACE)
        .keys(client.Keys.ENTER)
        .keys(client.Keys.SUBTRACT)
     },

     "Should perform right click" : (client) => {
        client
        .mouseButtonClick('right')
     },

     "Should perform windown actions" : (client) => {
         client
         .openNewWindow('tab')
         .fullscreenWindow()
         .windowHandles((results) => {
             const newWindow = results.value[1];
             client.switchWindow(newWindow)
         })
         .pause(5000)
     },

     "Should interact with alerts": (client) => {
        client
        .url('http://demo.automationtesting.in/Alerts.html')
        .click('#OKTab button')
        .getAlertText((results) => {
            console.log(results.value)
        })
        .acceptAlert()
     }

}

/**
 * {
        "NULL": "",
        "CANCEL": "",
        "HELP": "",
        "BACK_SPACE": "",
        "TAB": "",
        "CLEAR": "",
        "RETURN": "",
        "ENTER": "",
        "SHIFT": "",
        "CONTROL": "",
        "ALT": "",
        "PAUSE": "",
        "ESCAPE": "",
        "SPACE": "",
        "PAGEUP": "",
        "PAGEDOWN": "",
        "END": "",
        "HOME": "",
        "LEFT_ARROW": "",
        "UP_ARROW": "",
        "RIGHT_ARROW": "",
        "DOWN_ARROW": "",
        "ARROW_LEFT": "",
        "ARROW_UP": "",
        "ARROW_RIGHT": "",
        "ARROW_DOWN": "",
        "INSERT": "",
        "DELETE": "",
        "SEMICOLON": "",
        "EQUALS": "",
        "NUMPAD0": "",
        "NUMPAD1": "",
        "NUMPAD2": "",
        "NUMPAD3": "",
        "NUMPAD4": "",
        "NUMPAD5": "",
        "NUMPAD6": "",
        "NUMPAD7": "",
        "NUMPAD8": "",
        "NUMPAD9": "",
        "MULTIPLY": "",
        "ADD": "",
        "SEPARATOR": "",
        "SUBTRACT": "",
        "DECIMAL": "",
        "DIVIDE": "",
        "F1": "",
        "F2": "",
        "F3": "",
        "F4": "",
        "F5": "",
        "F6": "",
        "F7": "",
        "F8": "",
        "F9": "",
        "F10": "",
        "F11": "",
        "F12": "",
        "COMMAND": "",
        "META": ""
}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */