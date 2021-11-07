function addTogether() {
    let [arg1, arg2] = arguments;

    if (!isNumber(arg1) || (arg2 !== undefined && !isNumber(arg2))) {
        return undefined;
    }

    if (isNumber(arg1) && isNumber(arg2)) {
        return arg1 + arg2;
    }

    if (!arg2) {
        return function (newArg) {
            if (isNumber(newArg)) {
                return arg1 + newArg;
            }
        }
    }

    function isNumber(num) {
        return Number.isInteger(num);
    }
}

addTogether(2,3);