// Multiples of 3 or 5

const multiplesOfSum = (multiplesOf) => {
    return (limit) => {
        const array = [];
        for (let i = multiplesOf; i < limit; i += multiplesOf) {
            array.push(i)
        }
        return array.reduce((sum, currentval) => sum + currentval, 0)
    }
}

const byThree = multiplesOfSum(3);
const byFive = multiplesOfSum(5);

const finalSum = (limit) => (byThree(limit) + byFive(limit));

// Sum Even Fibonacci Numbers

const fib = (limit) => {
    const fibonacciArray = [1, 2];
    for (let i = 1; (fibonacciArray[i] + fibonacciArray[i-1]) < limit; i++) {
        fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i-1]);
    }
    return fibonacciArray.reduce((sum, currentval) => currentval % 2 === 0 ? sum + currentval : sum, 0);
}

// Largest Palindrom Product
