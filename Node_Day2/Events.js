const events = require(`events`); // Events is an inbuilt module available in node js
const { eventNames } = require("process");

const button = new events(); // creating an object of events

button.on("eventName", function () {
  console.log("this event was triggered");
}); // specify the name for the event and inside the function tell what does it do when we call the emit function below

//also we can create another name for the same event
button.on("click", () =>
  console.log(`another event was created and then we are triggering it`)
);

//Raise/Trigger the event using the emit function
button.emit(`eventName`);
button.emit(`eventName`);
button.emit(`eventName`);
button.emit(`click`);

console.log(`reached the end of the trigger`);

/**
 * create an object for the event
 * on method should be used to register the event and map the handler
 * emit method must be used in order to trigger the event
 */
