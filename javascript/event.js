const EventEmitter = require('events');

const event = new EventEmitter();

// events are synchronous in nature, so the order of execution is important

event.on("test", (name) => {
    console.log(name);
});


// multiple listeners for the same event can fire in the order they were registered

event.emit("test", "sai");
event.emit("test", "rahul");


// once event listener will fire only once and then it will be removed from the event listeners list

event.once("once", () => {
    console.log("once only fired");
});

event.emit("once");
event.emit("once");

// remove event listener using event.off or event.removeListener

const testHandler = () => {
    console.log("testing...");
}

event.on("remove", testHandler);
// event.off("remove", testHandler);
event.removeListener("remove", testHandler);

event.emit("remove");


// error event is a special event in nodejs, if there is no listener for the error event, it will throw an error and crash the application

// event.on("error", (err) => {
//     console.log(err);
// });

event.emit("error", new Error("something bad"));

console.log("hii");