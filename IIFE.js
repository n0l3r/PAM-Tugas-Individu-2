(function () {
    var x = "Hello!!"; 
    console.log(x);
})();


(function (name) {
    console.log("Hello " + name);
})("Naufal"); // Hello Naufal


function greet(name) {
    console.log("Hello " + name);

    (function (name) {
        console.log("Welcome " + name);
    })(name);
}

greet("Naufal"); 
// Hello Naufal 
// Welcome Naufal

