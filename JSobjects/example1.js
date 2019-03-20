// Demonstrating javaScrip objects.


// CHALLENGE (building an object with data that we already have)
// BUILD A PERSON WITH OBJECT LITERAL NOTATION
// USE THREE TYPES OF PROPERTY VALUES: STRING, NUMBER, BOOLEAN

const person = {
    name: 'Hero',
    age: 24,
    inRelationship: true
};

// CHALLENGE (building an object with separate inputs using dot notation)
//BUILD AN OBJECT LITERAL NOTATION
// USE DOT NOTATION TO ADD FOUR PROPERTIES AND VALUES

// add empty pizza object to the console
const pizza = {};

// adding properties into the console one at a time using dot notation
pizza.base = 'wheat';
pizza.toppingNum = 5;
pizza.deliveryReq = false ;

// output (in the console):
pizza; //returns in the console:
{base: 'wheat', toppingNum: = 5, deliveryReq: false};


// CHALLENGE
// ADD PROPERTIES AND VALUES TO AN OBJECT WITH BRACKET NOTATION
// USE A BOOLEAN, STRING AND NUMBER

// add empty cup object to the console
const cup = {};

// add properties into the console one at a time using bracket notation
cup['height'] = 30;
cup['theme'] = 'Harry Potter';
cup['handle'] = false;

// output (in the console):
cup;
{height: 30, theme: "Harry Potter", handle: false}


// REVIEW
// DOT AND BRACKET NOTATION
// DOT USED MORE FREQUENTLY BECAUSE IT'S MORE EFFICIEINT
// BRACKETS ARE MORE FLEXIBLE - THEY ALLOW THE USE OF INVALID PROPERTY VARIABLES E.G.

const hairStyle = {};

// property names containing spaces
hairStyle.'pixie cut' = 'short'; // NO
hairStyle['pixie cut'] = 'short'; // YES

// property names containing special characters
hairStyle.lob&bob = true; // NO
hairStyle['lob&bob'] = true; // YES

// property names containing JS reserved words
hairStyle.function = 'to look good'; // NO
hairStyle['function'] = 'to look good'; // YES


// PRACTICE

const snowman = {
    isSnow: true,
    color: 'white',
    madeOfSnowballs: 3,
    'first name': 'Frosty'
};

// CHALLENGE
// ACCESS ALL OF THE PROPERTIES OF THE SNOWMAN OBJECT. START WITH DOT NOTATION

snowman.isSnow; // returns true
snowman.color; // returns 'white'
snowman.nadeOfSnowballs; // returns 3
snowman['first name']; // returns 'Frosty' - (Requires bracket notation)

// CHALLENGE
// BUILD A HOUSE OBJECT
// ADD 4 PROPERTY VALUES WITH DOT NOTATION WITH AT LEAST ONE VALUE TYPE OF: STRING, NUMBER AND BOOLEAN
// ADD 3 PROPERTY VALUES WITH BRACKET NOTATION WITH 3 PROPERTY NAMES THAT CAN ONLY BE ADDED WITH BRAKET NOTATION RATHER THAN DOT NOTATION

const house = {};

// all valid dot notation
house.size = '1000sqm';
house.numBedRooms = 6;
house.numBathRooms = 4;
house.hasGarden = true;

// why not valid for dot notation?
house['lowest valuation'] = 1000000; // contains a space
house['typeOf'] = 'single family home'; // contaions a reseved JS word
house['reqDeposit20%'] = true; // contains special characters
house['1stOwner'] = "Jane Smith"; // begins with a number

