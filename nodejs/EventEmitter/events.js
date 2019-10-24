var events = require("events");
var util = require("util");

// * Custom emmitter
var myEmmiter = new events.EventEmitter();

myEmmiter.on("sampleEvent", msg => {
  console.log(msg);
});

myEmmiter.emit("sampleEvent", "sample event emitted");

//* Using util and events
var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var harsha = new Person("harsha");
var aarush = new Person("aarush");
var rachith = new Person("rachith");

var people = [harsha, aarush, rachith];

people.forEach(person => {
  person.on("speaks", msg => {
    console.log(person.name + " spoke: " + msg);
  });
});

rachith.emit("speaks", "How are you !!");
