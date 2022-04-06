// Cristiano
// ICS2O-Unit3-04-HTML
// April 6 2022

'use strict'
/**
 * Calculates fahrenheit to celcius and celcius to fahrenheit using the user's input. 
 */
function calculate(input) {
  if (input == 'fahrenheit') { // If the input is fahrenheit, do fahrenheit to celcius.
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
    const answer = ((fahrenheit - 32) * (5/9)).toFixed(2)
    document.getElementById("output-celsius").innerHTML = "<p>This temperature is equal to " + answer + "°C</p>"
  } else if (input == 'celcius') { // If the input is celcius, do celcius to fahrenheit.
    const celcius = parseFloat(document.getElementById("celcius").value)
    const answer = ((celcius * (9/5)) + 32).toFixed(2)
    document.getElementById("output-fahrenheit").innerHTML = "<p>This temperature is equal to " + answer + "°F</p>"
  }
}
