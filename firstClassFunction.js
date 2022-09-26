const printName = (name) => {
    console.log(`Hello ${name}`);
}

printName("Naufal"); // Hello Naufal

const arithmetic = (x, y) => {
    return {
        add: () => {
            return x + y;
        },
        substract: () => {
            return x - y;
        },
        multiply: () => {
            return x * y;
        },
        divide: () => {
            return x / y;
        }
    }
}

const result = arithmetic(10, 5);
console.log(result.add()); // 15
console.log(result.substract()); // 5
console.log(result.multiply()); // 50
console.log(result.divide()); // 2
