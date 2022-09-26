function callbackFunction() {
    console.log('This is a callback function');
}

function higherOrderFunction(callback) {
    callback();
}

higherOrderFunction(callbackFunction); // This is a callback function
