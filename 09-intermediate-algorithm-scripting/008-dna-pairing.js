function pairElement(str) {
    const dnaBasePairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    }

    const strArray = str.split("");
    return strArray.map(base => [base, dnaBasePairs[base]])
}

pairElement("GCG");