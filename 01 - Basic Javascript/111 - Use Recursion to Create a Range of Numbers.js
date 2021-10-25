function rangeOfNumbers(startNum, endNum) {
    var arr = [];

    if (startNum === endNum) {
        arr.push(startNum);
        return arr;
    }

    if (startNum !== endNum) {
        console.log(startNum, endNum)
        arr = rangeOfNumbers(startNum + 1, endNum);
        arr.unshift(startNum);
        return arr;
    }
}

console.log(rangeOfNumbers(1, 10))