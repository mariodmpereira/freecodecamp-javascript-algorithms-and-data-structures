function sumAll(arr) {
    const finalArray = [...arr].sort((a, b) => a - b);
    let count = 0;

    for (let i = finalArray[0]; i <= finalArray[finalArray.length - 1]; i++) {
        count += i
    }

    return count;
}

sumAll([5, 4]);