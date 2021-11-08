function palindrome(str) {
    const alphanumericRegex = /[^0-9a-z]/gi;
    const cleanStr = str.replace(alphanumericRegex, "").toLowerCase();

    for (let i = 0; i < cleanStr.length / 2; i++) {
        const headItem = cleanStr[i];
        const tailItem = cleanStr[cleanStr.length - 1 - i];

        if (headItem !== tailItem) {
            return false;
        }
    }

    return true;
}

palindrome("eye");