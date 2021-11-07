function steamrollArray(arr) {
    const flattenedArray = [];

    arr.map(item => Array.isArray(item) ? flattenedArray.push(...steamrollArray(item)) : flattenedArray.push(item))

    return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);