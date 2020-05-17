// Parks have: name, buildYear, numberOfTrees, area, treeDensity (numberOfTrees/area), age(buildYear - currentDate), averageAge(sumOfParks/sumOfAges)
// Street have: name, buildYear, length, size(tiny/small/normal(default)/big/huge), averageLength(sumOfLengths/sumOfStreets)

/*
REPORT INCLUDES
1- Total number of elements and all names
2- Number of each element and element's name
3- Elements one by one loging name and properties
4- Averages of each element (are out of classes )
*/

/*
A-Create elements ramdomly from maps of names and properties
    1-Create maps
    2-Make random function to pass maps and set properties at new object
    3-Make function create elements which deals with type of element, amount of elements, properties and methods
B-Store elements

C-Fix repeated properties 
*/

class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownElement {
    constructor(name, buildYear, numberOfTrees, area, age = 0, treeDensity = 0) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
        this.age = age;
        this.treeDensity = treeDensity;
    }

    calculateAge() {
        this.age = new Date().getFullYear() - this.buildYear;
    }

    calculateTreeDensity() {
        this.treeDensity = parseFloat((this.numberOfTrees / this.area).toFixed(2));
    }
}

class Street extends TownElement {
    constructor(name, buildYear, streetLength, sizeClassification = 'normal') {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.sizeClassification = sizeClassification;
    }
}

const parkNames = new Map();
parkNames.set(1, 'Big Pond Meadows');
parkNames.set(2, 'West Beach Park');
parkNames.set(3, 'Wildlife Grounds');
parkNames.set(4, 'High Valley Grounds');
parkNames.set(5, 'Cypress Park');
parkNames.set(6, 'Pineneedle Garden');
parkNames.set(7, 'The Garden of Penmore');
parkNames.set(8, 'Gamboro Gardens');
parkNames.set(9, 'Jolnear Grounds');
parkNames.set(10, 'Chesterfait Park');

const streetNames = new Map();
streetNames.set(1, 'Balmoral Lodge');
streetNames.set(2, 'Crossways');
streetNames.set(3, 'Wentworth Close');
streetNames.set(4, 'Wilson Road');
streetNames.set(5, 'New Lane');
streetNames.set(6, 'The Square');
streetNames.set(7, 'St George\'s Road');
streetNames.set(8, 'High Street');
streetNames.set(9, 'Churchill Avenue');
streetNames.set(10, 'Riverside Drive');

const townElementYears = new Map();
townElementYears.set(1, 1970);
townElementYears.set(2, 1975);
townElementYears.set(3, 1980);
townElementYears.set(4, 1985);
townElementYears.set(5, 1990);
townElementYears.set(6, 1995);
townElementYears.set(7, 2000);
townElementYears.set(8, 2005);
townElementYears.set(9, 2010);
townElementYears.set(10, 2015);

const townElementNumbers = new Map();
townElementNumbers.set(1, 600);
townElementNumbers.set(2, 700);
townElementNumbers.set(3, 800);
townElementNumbers.set(4, 900);
townElementNumbers.set(5, 1000);
townElementNumbers.set(6, 1100);
townElementNumbers.set(7, 1200);
townElementNumbers.set(8, 1300);
townElementNumbers.set(9, 1400);
townElementNumbers.set(10, 1500);

const townElementBigNumbers = new Map();
townElementBigNumbers.set(1, 500);
townElementBigNumbers.set(2, 1000);
townElementBigNumbers.set(3, 1500);
townElementBigNumbers.set(4, 2000);
townElementBigNumbers.set(5, 2500);
townElementBigNumbers.set(6, 3000);
townElementBigNumbers.set(7, 3500);
townElementBigNumbers.set(8, 4000);
townElementBigNumbers.set(9, 4500);
townElementBigNumbers.set(10, 5000);

const streetSizings = new Map();
streetSizings.set(1, 'tiny');
streetSizings.set(2, 'small');
streetSizings.set(3, 'normal');
streetSizings.set(4, 'big');
streetSizings.set(5, 'huge');
streetSizings.set(6, 'tiny');
streetSizings.set(7, 'small');
streetSizings.set(8, 'normal');
streetSizings.set(9, 'big');
streetSizings.set(10, 'huge');

const getRandomProperty = propertiesMap => propertiesMap.get(Math.floor(Math.random() * 10) + 1);

const createTownElements = (amount, type) => {
    let elements = [];

    for (let i = 0; i < amount; i++) {
        let element;
        if (type === 'park') {
            element = new Park(
                getRandomProperty(parkNames),
                getRandomProperty(townElementYears),
                getRandomProperty(townElementNumbers),
                getRandomProperty(townElementBigNumbers));
            element.calculateAge();
            element.calculateTreeDensity();
        }

        if (type === 'street') {
            element = new Street(
                getRandomProperty(streetNames),
                getRandomProperty(townElementYears),
                getRandomProperty(townElementBigNumbers),
                getRandomProperty(streetSizings));
        }

        elements.push(element);
    }

    return elements;
}

const townParks = createTownElements(3, 'park');
const townStreets = createTownElements(4, 'street');

const logTreeDensities = parks => parks.forEach(park =>
    console.log(`The Tree Density of ${park.name} is ${park.treeDensity}`)
);

const propertySum = (townElements, elementKey) => {
    //Althought reduce can do the job it didn't appear in any lecture yet
    let result = 0;

    townElements.forEach(element => result += element[elementKey]);

    return result;
}

const propertyAverage = (townElements, elementKey) => {
    return parseFloat(propertySum(townElements, elementKey) / townElements.length).toFixed(2);
}

const logParkAverageAge = (parks, age) => {
    console.log(`The average age of the park is ${propertyAverage(parks, age)} years`);
}

const logTotalStreetsLength = (streets, streetLength) => {
    console.log(`The total length of the streets is ${propertySum(streets, streetLength)} meters`)
}

const logStreetAverageLength = (streets, streetLength) => {
    console.log(`The street average length is ${propertyAverage(streets, streetLength)} meters`)
}

const logStreetSizeClassifications = streets => {
    streets.forEach(street =>
        console.log(`The street ${street.name} has the ${street.sizeClassification} size classification`)
    );
}

logTreeDensities(townParks);
logParkAverageAge(townParks, 'age');
logTotalStreetsLength(townStreets, 'streetLength');
logStreetAverageLength(townStreets, 'streetLength');
logStreetSizeClassifications(townStreets);