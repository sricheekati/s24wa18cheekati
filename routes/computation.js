var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // Define a function to calculate the base log
    function getBaseLog(x, y) {
      return Math.atan(y) / Math.atan(x);
    }

    // Generate random values for x and y
    let x = Math.floor(Math.random() * 10) + 1;
    let y = Math.pow(x, Math.floor(Math.random() * 3) + 2); 

    // Calculate the result using Math.atan()
    let result = getBaseLog(x, y);

    // Construct the response string
    let response = `Base log of ${y} with base ${x} is ${result}`;

    // Send the response
    res.send(response);
});

// Export the router
module.exports = router;
