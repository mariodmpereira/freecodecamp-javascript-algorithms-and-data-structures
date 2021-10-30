function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (const beagleKey in beagle) {
    if (beagle.hasOwnProperty(beagleKey)) {
        ownProps.push(beagleKey)
    } else {
        prototypeProps.push(beagleKey);
    }
}