function rot13(str) {
    const shiftCharacters = 13;
    const uppercaseAlphabetRegex = /[^A-Z]/gi;
    let strDeciphered = "";

    for (const item of str) {
        if (item.match(uppercaseAlphabetRegex)) {
            strDeciphered += item;
            continue;
        }

        const itemCharCode = item.charCodeAt(0);
        const itemFromCharCode = isCharCodeLowerThanAlphabetsMiddleIndex(itemCharCode)
            ? String.fromCharCode(itemCharCode + shiftCharacters)
            : String.fromCharCode(itemCharCode - shiftCharacters);

        strDeciphered += itemFromCharCode;
    }

    return strDeciphered;

    function isCharCodeLowerThanAlphabetsMiddleIndex(charCode) {
        const alphabetCharCodeMiddleIndex = "A".charCodeAt(0) + shiftCharacters;
        return charCode < alphabetCharCodeMiddleIndex;
    }
}

rot13("SERR PBQR PNZC")