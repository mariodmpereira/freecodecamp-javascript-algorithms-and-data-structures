function smallestCommons(arr) {
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    let count = max;

    for (let i = (min - 1); i <= Infinity; i++) {
        const item = i;
        const countIsMultipleOfItem = count % item === 0;

        if (countIsMultipleOfItem) {
            const isCheckingLastItem = item === max;

            if (isCheckingLastItem) {
                return count;
            }
            continue;
        }

        count++;
        i = (min - 1);
    }

    return count;
}

smallestCommons([1, 5]) // 60.
smallestCommons([5, 1]) // 60.
smallestCommons([2, 10]) // 2520.
smallestCommons([1, 13]) // 360360.
smallestCommons([23, 18]) // 6056820.

function isNumberMultipleOfCount(number, count) {
    return count % number === 0;
}

function areMinAndMaxMultipleOfCount(min, max, count) {
    return isNumberMultipleOfCount(min, count) && isNumberMultipleOfCount(max, count);
}
