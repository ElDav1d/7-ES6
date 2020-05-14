class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownElement {
    constructor(name, buildYear, numberOfTrees, area) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    calculateAge() {
        return new Date().getFullYear() - this.buildYear;
    }

    calculateTreeDensity() {
        return this.numberOfTrees / this.area;
    }
}

class Street extends TownElement {
    constructor(name, buildYear, streetLength, sizeClassification = 'normal') {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.sizeClassification = sizeClassification;
    }
}

