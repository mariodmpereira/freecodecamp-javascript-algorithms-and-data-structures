function findLongestWordLength(str) {
    let count = 0;
    let strToArray = str.split(" ");

    for (const item of strToArray) {
        if (item.length > count) {
            count = item.length;
        }
    }

    return count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");