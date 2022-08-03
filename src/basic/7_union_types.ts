function addOrConcat(
    a: number | string | boolean,
    b: number | string | boolean,
): number | string | boolean {
    if (typeof a === 'number' && typeof b === 'number'){
        return a + b;   
    }
    return `${a}${b}`;
}

console.log(addOrConcat(1, 2));
console.log(addOrConcat('a', 'b'));