const MaxandMin = (num) => {
    let min =  Math.min(...num);
    let max =  Math.max(...num);
    return [min , max ];
}

const sumOfArr = (arr) => {
    let sum =0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

const filterArray = (numbers) => {
    return numbers.filter((num)=>num % 2 === 0)
}

export {MaxandMin, sumOfArr , filterArray};