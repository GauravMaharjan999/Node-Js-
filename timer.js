const printHelloWorld = () => {
    console.log("Hello World,this is the example of setTimeOut");
}

let counter = 0;
const printHelloWorldInterval = () => {
    counter++;
    console.log("counter:", counter);
}

setTimeout(printHelloWorld, 5000);
setInterval(printHelloWorldInterval, 2000);