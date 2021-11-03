function uniteUnique(arr) {
    const args = [...arguments];
    const output = [];

    for (const innerArray of args) {
        for (const item of innerArray) {
            if (!output.includes(item)) {
                output.push(item);
            }
        }
    }

    return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);