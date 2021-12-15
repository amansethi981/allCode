const event = require("events");
const myEmitter = new event();

myEmitter.on("myEvent", () => {
  console.log("Event has occured");
});

myEmitter.on("myEvent", () => {
  console.log("Event has occured again");
});

myEmitter.on("myEvent", (a, b) => {
  console.log("Product of Number are:" + a * b);
});

myEmitter.on("anotherevent", () => {
  console.log("I was called bt another Event");
  myEmitter.emit("myEvent", 10, 20);
});

myEmitter.emit("anotherevent");
