
var RaspiSensors = require('raspi-sensors');

var PIR = new RaspiSensors.Sensor({
        type : "PIR",
        pin  : 0X7
}, "pir_sensor");

PIR.fetchInterval(function(err, data) {
        if(err) {
          console.error("An error occured!");
          console.error(err.cause);
                return;
        }

        // Log the values
       console.log(data.value);
       data.value && action();
}, 1); // Fetch data every 1 seconds

var action = function() {
  console.log("MOVE!");
};
