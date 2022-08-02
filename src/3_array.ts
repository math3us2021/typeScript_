///Array

export function multiplicarArgs(...args: Array<number>): number {
    return args.reduce((ac,valor) => ac * valor, 1);
}
export default function concatenaString(...args: string[]): string {
    return args.reduce((ac,valor) => ac + valor);
}

export function toUpperCase(...args: string[]):string[] {
    return args.map ((valor) => valor.toUpperCase());
}


const multipli = multiplicarArgs(1,2,3,4,5);
const concatString = concatenaString('a','b','c');
const toUpper = toUpperCase('a','d','g');
console.log(multipli);
console.log(concatString);
console.log(toUpper);
