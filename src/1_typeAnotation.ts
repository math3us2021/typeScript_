///Type Anotation - é uma anotação que diz o tipo da variável

/// Tipos basicos de dados (primitivos)
const nome: string = 'Matheus';
const sobrenome: string = 'Ferreira';
const idade: number = 23; // number pode ser inteiro ou decimal
const adulto: boolean = true; // boolean pode ser true ou false
const simbolo: symbol = Symbol('Símbolo'); // symbol é um tipo especial de variável que não pode ser reatribuído

///Arrays

const arrayDeNumeros: number[] = [1, 2, 3, 4, 5]; // os array vem depois do tipo de dado
const arrayDeStrings: string[] = ['Matheus', 'Jose', 'Veronica'];
const arrayDeBooleans: boolean[] = [true, false, true, false];
const arrayOutraOpcao: Array<number> = [1, 2, 3, 4, 5]; // array de qualquer tipo de dado
const arrayOutraOpcao2: Array<string> = ['Matheus', 'Jose', 'Veronica'];

//Objetos
const pessoa: { nome: string, sobrenome: string, idade:number, adulto?: boolean} = {
    nome: 'Matheus',
    sobrenome: 'Ferreira',
    idade: 23,
}
console.log(pessoa.nome); 

//Functions
function soma(x:number, y:number): number { // o number fora do colchete é o tipo de dado que a função retorna
    return x + y;
} 
const soma2 : (x: number, y: number) => number =
    (x, y) => x + y;

///Void - tipo de dado que não retorna nenhum valor
function alerta(): void {
    alert('Alerta');
}
///Any - tipo de dado que pode ser qualquer coisa... Não é recomendado
let qualquer: any = 'Legal';
qualquer = 23;
qualquer = true;
console.log(qualquer);