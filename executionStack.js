const name = "Naufal";

function greet() {
    console.log(`Hello ${name}`);
}

function welcome() {
    console.log(`Welcome ${name}`);
}

function sayHello() {
    greet();
}

function sayWelcome() {
    welcome();
}

sayHello();
sayWelcome();

// execution stack
// sayHello()
// greet()
// sayWelcome()
// welcome()

