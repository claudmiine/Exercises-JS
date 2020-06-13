/* the temperature conventer  C to F*/

function tempConventer(celsTemp) {
    var celsiusToF = ((celsTemp * 9) / 5) + 32;
    console.log(celsTemp + " is " + celsiusToF) + " in Fahrenheit."
}

tempConventer(10)

/* the temperature conventer  F to C*/

function tempConventer2(fahrenTemp) {
    var fahrenToCels = ((fahrenTemp - 32) * 5 / 9);
    console.log(fahrenTemp + " is " + fahrenToCels) + " in Celsius."
}

tempConventer2(50)