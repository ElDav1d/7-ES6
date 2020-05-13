////////////////////
// DESTRUCTURING
// es5

// var john = ['John', 26];
// var name = john[0];
// var age = john[1]

// es 6
// const john = ['John', 26];

// const [name, age] = john;

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// }

// const { firstName, lastName } = obj;
// const { firstName: nombre, lastName: apellido } = obj;

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [myAge, retirement] = calcAgeRetirement(1978);
// console.log(myAge);
// console.log(retirement);

/*

//////////////////////
// ARRAYS

const boxes = document.querySelectorAll('.box');

// es5

// var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function (current) {
//     current.style.backgroundColor = 'pink';
//     current.textContent = 'PINK';
// });


// ES6

const boxesArr5 = Array.from(boxes);

// boxesArr5.forEach(element => {

//     element.style.backgroundColor = 'dodgerblue';
//     element.textContent = 'I became blue';
// });

// for (const element of boxesArr5) {
//     if (element.className.includes('blue')) {
//         continue;
//     }
//     element.style.backgroundColor = 'dodgerblue';
//     element.textContent = 'I became blue';
// }

// es5
var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function (element) {
//     return element >= 18;
// })

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// ES6

console.log(ages.findIndex(element => element >= 18));
console.log(ages.find(element => element >= 18));
*/

//////////////////////////////////////
// SPREAD OPERATOR

/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sumn1 = addFourAges(18, 30, 12, 21);

//ES5

var ages = [18, 30, 12, 21];

var sum2 = addFourAges.apply(null, ages);

//ES6

const sum3 = addFourAges(...ages);

const heading = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [heading, ...boxes];
console.log(typeof all);
console.log(all);
console.log(`My string is ${all.toString()}`);

all.forEach(element => element.style.color = 'purple');
*/

//////////////////////////////////
// Rest parameters
/*

// ES5
function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function (current) {
        console.log((2016 - current) >= 18);
    })
};

isFullAge5(1990, 1991, 2010);
isFullAge5(1990, 1991, 2010, 1078, 500);

// ES6
function isFullAge6(...years) {
    console.log(years);
    years.forEach(year => console.log((2016 - year) >= 18));
};

isFullAge6(1990, 1991, 2010);
isFullAge6(1990, 1991, 2010, 1078, 500);
*/

/*
// ES5
function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);

    argsArr.forEach(function (current) {
        console.log((2016 - current) >= limit);
    })
};

// isFullAge5(21, 1990, 1991, 2010);
// isFullAge5(21, 1990, 1991, 2010, 1078, 500);

// ES6
function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(year => console.log((2016 - year) >= limit));
};

isFullAge6(21, 1990, 1991, 2010);
isFullAge6(21, 1990, 1991, 2010, 1078, 500);
*/

//////////////////////////////
// Default parameters

// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'american' : nationality;
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}



// ES6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1990, 'Díaz');
*/

///////////////////////////////////
// Maps
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2020');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong answer');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
    // question.delete(4);
    console.log('Answer 4 is here');

}

// question.clear();

// question.forEach((value, key) => console.log(`This is key: ${key}. And this is value: ${value}.`));

for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number') {
        console.log(`This is key: ${key}. And this is value: ${value}.`)
    }
}

const answer = parseInt(prompt(`Write the correct answer`));

console.log(question.get(answer === question.get('correct')));
*/

//////////////////////
// Classes

// ES5

/*
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        const age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        // not called on instances of class
        // just an utility of the function
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

// john6.greeting();
Person6.greeting();
*/

/////////////////////////////////
// Classes and Subclasses

// ES5

var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job); // to inherit the properties of superclass

    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype); // to inherit the PROTOTYPE of superclass, has tpo AFTER declaring subclass constructor
var jonhAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
}

jonhAthlete5.calculateAge();
jonhAthlete5.wonMedal();

// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job) // to inherit the properties of superclass instead of using call(this, ...);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const jonhAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

jonhAthlete6.calculateAge();
jonhAthlete6.wonMedal();
