function sumFibs(num) {
    const fibonacciSequence = [1, 1];
    let lastFibonacciNumber = fibonacciSequence[fibonacciSequence.length - 1];

    while (lastFibonacciNumber <= num) {
        lastFibonacciNumber = fibonacciSequence[fibonacciSequence.length - 1];
        const previousFibonacciNumber = fibonacciSequence[fibonacciSequence.length - 2];
        const sumLastFibonacciNumbers = previousFibonacciNumber + lastFibonacciNumber;

        if (sumLastFibonacciNumbers > num) {
            break;
        }

        fibonacciSequence.push(sumLastFibonacciNumbers);
    }

    return fibonacciSequence
        .filter(number => number % 2 !== 0)
        .reduce((a, b) => a + b)
}

sumFibs(1000)