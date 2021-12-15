const events = require("events");
const myEvent = new events();

myEvent.on("submit", (email, pass) => {
  console.log("Line 5");
  console.log(email + " " + pass);
});

myEvent.on("submit", () => {
  console.log("I was called after the event");
});

myEvent.on("anotherevent", () => {
  console.log("Line 14");
  // myEvent.emit("submit","abc@gmail.com","123");
});

myEvent.on("submit", (email, pass) => {
  console.log("Line 17");
  console.log(email + " " + pass);
});
myEvent.emit("submit","abc@gmail.com","123");
myEvent.emit("anotherevent");
