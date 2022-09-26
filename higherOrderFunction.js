const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

const sayHello = greet("Hello");
const sayWelcome = greet("Welcome");

sayHello("Naufal"); // Hello Naufal
sayWelcome("Naufal"); // Welcome Naufal

