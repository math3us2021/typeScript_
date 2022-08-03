//// unknowm permite que um tipo seja declarado, mas não seja definido o tipo de dado

let x: unknown;
x = 'Legal';
x = 23;
x = true;
console.log(x); 
////Porem se for realizar operações com um tipo unknown, o TS irá dar erro
///console.log(x + 1);  erro, porem se eu tipar corretamente ele permite
if(typeof x === 'string'){
    console.log(x.length);
}
    console.log(x + '1');
