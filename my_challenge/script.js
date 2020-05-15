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
townElementYears.set(1, 1975);
townElementYears.set(2, 1980);
townElementYears.set(3, 1985);
townElementYears.set(4, 1990);
townElementYears.set(5, 1995);
townElementYears.set(6, 2000);
townElementYears.set(7, 2005);
townElementYears.set(8, 2010);
townElementYears.set(9, 2015);
townElementYears.set(10, 2020);

const townElementNumbers = new Map();
townElementNumbers.set(1, 5);
townElementNumbers.set(2, 10);
townElementNumbers.set(3, 15);
townElementNumbers.set(4, 20);
townElementNumbers.set(5, 25);
townElementNumbers.set(6, 30);
townElementNumbers.set(7, 35);
townElementNumbers.set(8, 40);
townElementNumbers.set(9, 45);
townElementNumbers.set(10, 50);

const townElementBigNumbers = new Map();
townElementBigNumbers.set(1, 50);
townElementBigNumbers.set(2, 100);
townElementBigNumbers.set(3, 150);
townElementBigNumbers.set(4, 200);
townElementBigNumbers.set(5, 250);
townElementBigNumbers.set(6, 300);
townElementBigNumbers.set(7, 350);
townElementBigNumbers.set(8, 400);
townElementBigNumbers.set(9, 450);
townElementBigNumbers.set(10, 500);

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
            element = new Park(getRandomProperty(parkNames), getRandomProperty(townElementYears), getRandomProperty(townElementNumbers), getRandomProperty(townElementBigNumbers));
            element.calculateAge();
            element.calculateTreeDensity();
        }

        if (type === 'street') {
            element = new Street(getRandomProperty(streetNames), getRandomProperty(townElementYears), getRandomProperty(townElementBigNumbers), getRandomProperty(streetSizings));
        }

        elements.push(element);
    }

    return elements;
}

