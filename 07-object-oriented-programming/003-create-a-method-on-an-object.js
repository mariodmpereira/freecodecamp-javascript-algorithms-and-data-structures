let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs() {
        return "This dog has ".concat(this.numLegs).concat(" legs.")
    }
};

dog.sayLegs();