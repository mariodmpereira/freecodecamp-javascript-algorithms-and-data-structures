function largestOfFour(arr) {

    const finalArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const item = arr[i][j];

            if (finalArray[i] === undefined) {
                finalArray.push(item);
            }

            if (item > finalArray[i]) {
                finalArray[i] = item;
            }
        }
    }

    return finalArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
