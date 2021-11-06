function dropElements(arr, func) {
    const finalArray = [...arr];

    for (const item of arr) {
        if (func(item)) {
            return finalArray;
        }

        finalArray.splice(0, 1);
    }

    return [];
}

dropElements([1, 2, 3], function (n) {
    return n < 3;
});