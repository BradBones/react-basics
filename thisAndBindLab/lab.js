// review this & bind
// 'this' is defined by creation context
// in objects 'this' is set to the object method is called on
// bind - helps 'this' find it's contrext
// pass object as argument to bind method to find desired context

// practice
let person1 = {
    name: 'Alex'
};

let person2 = {
    name: 'Alexis'
};

function namer() {
    return this.name;
}

namer(); // Does not return a name as 'this' has lost it's context


// Challenge
// Use bind method twice to give 'this' the context of person and person2
// The first time to return 'Alex' and the second time to return "Alexis"

namer.bind(person1)();
// Returns: "Alex"

namer.bind(person2)();
// Returns: "Alexis"



// Practice
let number = {
    x: 24,
    y: 22
};

let count = function() {
    console.log(this.x + this.y);
}

count();

let boundFunc = count.bind(number);






