// PRACTICE

const weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];

const goOutside = [];

for (const i = 0; i < weather.length; i++) {
    if (weather[i] > 70) {
    goOutside.push(weather[i]);   
    }
}

goOutside; // Returns: [72, 84, 92, 72]

// CHALLENGE - DO THE SAME THING USING THE FILTER METHOD.
 // PASS A FUNCTION TO FILTER METHOD AND RETURN AN ARRAY OF ALL ELLEMENTD THAT RETURN A VALUE OF TRUE.

 