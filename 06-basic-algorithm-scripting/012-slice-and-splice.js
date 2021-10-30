function frankenSplice(arr1, arr2, n) {
    const finalArray = [...arr2];
    finalArray.splice(n, 0, ...arr1)
    return finalArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);