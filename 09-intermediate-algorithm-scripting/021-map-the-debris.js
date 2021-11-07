function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const finalArray = [...arr];

    for (let i = 0; i < finalArray.length; i++) {
        const item = finalArray[i];
        item.orbitalPeriod = findOrbPeriod(item.avgAlt);
        delete item.avgAlt;
    }

    return finalArray;

    function findOrbPeriod(alt){
        const axis = alt + earthRadius;
        return Math.round(2 * Math.PI * Math.sqrt(Math.pow(axis, 3) / GM));
    }
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);