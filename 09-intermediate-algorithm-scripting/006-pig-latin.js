function translatePigLatin(str) {
    const regex = /^[^aeiou]+/;
    const consonantsMatched = str.match(regex);

    if (consonantsMatched) {
        return str.replace(regex, "").concat(consonantsMatched + "ay");
    }

    return str.concat("way")
}

translatePigLatin("consonant");