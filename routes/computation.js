var express = require('express');
var router = express.Router();

// Define route handler for /computation endpoint
router.get('/computation', function (req, res, next) {
    // Extract the last digit of your ID
    var lastDigit = 572818 % 10; // Replace YOUR_ID with your actual ID

    // Generate a random value between 1 and 100
    var randomValue = Math.floor(Math.random() * 100) + 1;

    // Determine the Math function based on the last digit of your ID
    var mathFunction;
    switch (lastDigit) {
        case 0:
            mathFunction = Math.sqrt;
            break;
        case 1:
            mathFunction = Math.sin;
            break;
        case 2:
            mathFunction = Math.cos;
            break;
        case 3:
            mathFunction = Math.tan;
            break;
        case 4:
            mathFunction = Math.atan;
            break;
        case 5:
            mathFunction = Math.exp;
            break;
        case 6:
            mathFunction = Math.expm1;
            break;
        case 7:
            mathFunction = Math.log10;
            break;
        case 8:
            mathFunction = Math.log2;
            break;
        case 9:
            mathFunction = Math.acos;
            break;
        default:
            mathFunction = Math.abs;
    }

    // Check if the request has a query argument associated with x
    var x = req.query.x ? parseFloat(req.query.x) : randomValue;

    // Apply the Math function to x
    var result = mathFunction(x);

    // Construct the response string
    var responseString = `${mathFunction.name} applied to ${x} is ${result}`;

    // Send the response
    res.send(responseString);
});

module.exports = router;
