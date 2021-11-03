function fearNotLetter(str) {
    const strStartingCharCode = str[0].charCodeAt(0);
    let loopEndingIndex = strStartingCharCode + str.length;

    for (let i = strStartingCharCode; i < loopEndingIndex; i++) {
        const strCharacter = str.charAt(i - strStartingCharCode);
        const alphabetCharacter = String.fromCharCode(i);

        if (strCharacter !== alphabetCharacter) {
            return alphabetCharacter;
        }
    }

    return undefined;
}

fearNotLetter("abce");