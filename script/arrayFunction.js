const factorial = (number) => {
    let num = 1; 
    if (number < 0) {
        console.log("undefined")
    } else {
        for (let i = 1; i <= number; i++) {
            num *= i;  
        }
        return num;
    }
}
const prime = (number) => {
    if (number < 2){
        console.log(`${number} is not a prime number`)
    }
    for( let i = 2; i < number; i++){
        if (number % i === 0){
            return `${number} is not a prime number`;
        }
    }
    return `${number} is a prime number`;
}

const fibonacci = (n) => {
    const fib = [0,1];
    for (let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}
export {factorial , prime , fibonacci}