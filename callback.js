const call = () => console.log("hello")

function dizHello(callback) {
    callback()
}

dizHello(call)