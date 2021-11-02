function diffArray(arr1, arr2) {
    const newArr = [];

    function getUnique(firstArray, secondArray) {
        firstArray
            .filter(item => !secondArray.includes(item))
            .map(item => newArr.push(item))
    }

    getUnique(arr1, arr2);
    getUnique(arr2, arr1);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);