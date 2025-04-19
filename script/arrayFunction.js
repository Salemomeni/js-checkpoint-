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
export {factorial , prime}