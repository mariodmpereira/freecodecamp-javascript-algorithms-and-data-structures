function convertToRoman(num) {
    const romanToNumMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let numClone = num;
    let romanFromNum = "";

    for (const key in romanToNumMap) {
        const value = romanToNumMap[key];

        while (numClone >= value) {
            romanFromNum += key;
            numClone -= value;
        }
    }

    console.log(romanFromNum)
    return romanFromNum;
}

convertToRoman(9678);