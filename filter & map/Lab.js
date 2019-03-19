// PRACTICE

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];

var goOutside = [];

for (var i = 0; i < weather.length; i++) {
    if (weather[i] > 70) {
    goOutside.push(weather[i]);   
    }
}

goOutside; // Returns: [72, 84, 92, 72]

// CHALLENGE - DO THE SAME THING USING THE FILTER METHOD.
 // PASS A FUNCTION TO FILTER METHOD AND RETURN AN ARRAY OF ALL ELLEMENTD THAT RETURN A VALUE OF TRUE.

 var over70 = (over) => {
    return over > 70;
 }
 
 goOutside = weather.filter(over70);

 // Simpler way to write this:
 var goOutside = weather.filter(function(temp) {
     return temp > 70;
 })

// Another example using objects:
 var forecast = [
     {day: 'Monday', sun: true, humidity: 10},
     {day: 'Tuesday', sun: false, humidity: 100},
     {day: 'Wednesday', sun: false, humidity: 100},
     {day: 'Thursday', sun: true, humidity: 25},
     {day: 'Friday', sun: false, humidity: 100},
     {day: 'Saturday', sun: true, humidity: 15},
     {day: 'Sunday', sun: false, humidity: 100}
 ];

 var sunnyDays = [];

 for (var i = 0; i < forecast.length; i++) {
     if (forecast[i].sun) {
         sunnyDays.push(forecast[i]);
     }
 }

 // Instead of writing that for loop, we can use filter:
sunnyDays = forecast.filter(function(isSunny) {
     return isSunny.sun;
 })

// Working with map()
var humid = [];

for (var i = 0; i < forecast.length; i++) {
    humid.push(forecast[i].humidity)
}

humid; // Returns: [10, 100, 100 ...etc] all the values of humidity.

// Now do the same thing with map
humid = forecast.map(function(wetness) {
    return wetness.humidity;
})

// another example
var numbers = [5, 10, 15, 20, 25];

var triples = numbers.map(function(num) {
    return num * 3;
})

triples; // Returns: [15, 30, 45, 60, 75]

// Review
// map
// higher order function - can recieve another function as an argument
// does not delete but transforms each element in a new array

// practice
// challenge - Implement the the map method twice
    // Take an array of numbers and use map to double the values
    // then use map again to add +1 to each number in a new array

var numbers = [5, 10, 15, 20, 25];

var doubles = numbers.map(function(num) {
    return num * 2;
}).map(function(num) {
    return num + 1;
})


// Challenge
// Change an array of greetings to all upper case words
// save the first word in the array to a variable 'shoutPie'

var greetings = ['hello', 'hi', 'bonjour', 'hej', 'terve'];

var shout = greetings.map(function(upper) {
    return upper.toUpperCase();
})

var shoutPie = shout[0];
// another way to write the line above would be to use shout:
var shoutPie2 = shout.shift(); // shift returns the first item in an array




