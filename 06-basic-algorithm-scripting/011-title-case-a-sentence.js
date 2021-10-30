function titleCase(str) {

    let result = "";

    for (let i = 0; i < str.length; i++) {
        const item = str[i];
        const isPreviousCharacterAnEmptyString = str[i - 1] === " ";
        const isTheFirstCharacter = i === 0;

        if (isPreviousCharacterAnEmptyString || isTheFirstCharacter) {
            result += item.toUpperCase();
            continue;
        }

        result += item.toLowerCase();
    }

    return result;
}

console.log(
    titleCase("I'm a little tea pot")
)