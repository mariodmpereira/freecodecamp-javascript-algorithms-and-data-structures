function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line

    collection.forEach(obj => {
        for (const key in source) {
            const isSourceKeyValuePairNotPresentOnObject = !(obj.hasOwnProperty(key) && obj[key] === source[key]);
            if (isSourceKeyValuePairNotPresentOnObject) {
                return;
            }
        }
        arr.push(obj);
    })

    // Only change code above this line
    return arr;
}

whatIsInAName([
        {"apple": 1, "bat": 2},
        {"bat": 2},
        {"apple": 1, "bat": 2, "cookie": 2}
    ],
    {"apple": 1, "bat": 2})
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

// whatIsInAName(
//     [
//         {first: "Romeo", last: "Montague"},
//         {first: "Mercutio", last: null},
//         {first: "Tybalt", last: "Capulet"}
//     ],
//     {last: "Capulet"});