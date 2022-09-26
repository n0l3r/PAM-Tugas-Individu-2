const task = (message) => {
    var n = 1000000000;
    while (n > 0) {
        n--;
    }
    console.log(message);
}

task("Task 1");
task("Task 2");
task("Task 3");

const taskWithDelay = (message, delay) => {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

taskWithDelay("Task 1 is running", 1000);
taskWithDelay("Task 2 is running", 500);
taskWithDelay("Task 3 is running", 1500);