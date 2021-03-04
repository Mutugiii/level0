// Formula -> https://www.rapidtables.com/convert/temperature/how-celsius-to-fahrenheit.html

function celsiusToFahrenheit(tempCelsius) {
    var tempFahrenheit = tempCelsius * 1.8 + 32;
    return tempFahrenheit.toFixed(2);
}


console.log("Celsius to Fahrenheit");
console.log(celsiusToFahrenheit(-50));
console.log(celsiusToFahrenheit(-7));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(20));
console.log(celsiusToFahrenheit(80));


// Separator for printing
console.log("");

// Formula -> https://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.html

function fahrenheitToCelsius(tempFahrenheit) {
    var tempCelsius = (tempFahrenheit - 32) / 1.8;
    return tempCelsius.toFixed(2);
}


console.log("Fahrenheit to Celsius");
console.log(fahrenheitToCelsius(-459.67));
console.log(fahrenheitToCelsius(-50));
console.log(fahrenheitToCelsius(0));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(70));
console.log(fahrenheitToCelsius(220));
