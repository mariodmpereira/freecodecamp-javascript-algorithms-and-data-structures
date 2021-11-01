const squareList = arr => {
    // Only change code below this line
    const integersSquare = [];

    arr
        .filter(number => number > -1)
        .filter(number => Number.isInteger(number))
        .map(number => integersSquare.push(number * number))

    return integersSquare;
    // Only change code above this line
};

const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])
console.log(squaredIntegers);