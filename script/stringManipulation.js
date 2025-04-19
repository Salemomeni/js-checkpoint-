const reversedString = (str) => {
    let reversed = str.split('').reverse().join('');
    return reversed;
}
const countString = (char) => {
    return char.length;
}
export {countString,reversedString,Capfirst};

const Capfirst = (str) => {
    let cap = str.at(0).toUpperCase();
    return cap +str.slice(1);
}