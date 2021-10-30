function mutation(arr) {
    const firstString = arr[0].toLowerCase();
    const secondString = arr[1].toLowerCase();

    for (const character of secondString) {
        if (!firstString.includes(character)) {
            return false;
        }
    }

    return true;
}

mutation(["hello", "Hello"])