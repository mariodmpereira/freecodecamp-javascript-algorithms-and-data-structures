function bouncer(arr) {
    const finalArray = [];
    for (const item of arr) {
        if (Boolean(item)) {
            finalArray.push(item);
        }
    }

    return finalArray;
}

bouncer([7, "ate", "", false, 9]);