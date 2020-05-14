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
        this.treeDensity = this.numberOfTrees / this.area;
    }
}

class Street extends TownElement {
    constructor(name, buildYear, streetLength, sizeClassification = 'normal') {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.sizeClassification = sizeClassification;
    }
}

