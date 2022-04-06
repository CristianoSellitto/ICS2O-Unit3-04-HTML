// Cristiano
// ICS2O-Unit3-04-HTML
// April 6 2022

'use strict'
/**
 * Calculates fahrenheit to celsius and celsius to fahrenheit using the user's input. 
 */
function calculate(input) {
  if (input == 'fahrenheit') { // If the input is fahrenheit, do fahrenheit to celsius.
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
    const answer = ((fahrenheit - 32) * (5/9)).toFixed(2)
    document.getElementById("output-celsius").innerHTML = "<p>This temperature is equal to " + answer + "°C</p>"
  } else if (input == 'celsius') { // If the input is celsius, do celsius to fahrenheit.
    const celsius = parseFloat(document.getElementById("celsius").value)
    const answer = ((celsius * (9/5)) + 32).toFixed(2)
    document.getElementById("output-fahrenheit").innerHTML = "<p>This temperature is equal to " + answer + "°F</p>"
  }
}
