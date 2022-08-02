/// type alias é uma forma de definir um novo tipo, ao qual podemos dar um nome a um tipo existente de forma mais curta. É uma personalização para utilizar as tipagens declaradas no TS.
type Pessoa = {
    nome:string;
    sobrenome:string;
    idade:number;
    corDosOlhos:string;
    peso?:number;
};
const pessoa: Pessoa = {
    nome: 'Matheus',
    sobrenome: 'Ferreira',
    idade: 32,
    corDosOlhos: 'castanho',
    peso: 80,
};
console.log(pessoa);


/// Tambem pode ser usado como uma variavél com um unico tipo

type Idade = string;
const idade: Idade = '32';
console.log('****' , idade);

type CorDaRoupa = 'azul' | 'verde' | 'preto';
type CorDaRoupaContinua = 'rosa' | 'vermelho' | 'branco';
type CorDaRoupaFinal = CorDaRoupa | CorDaRoupaContinua;

function setCorRoupa(pessoa: Pessoa, cor: CorDaRoupaFinal): Pessoa {
    return {...pessoa, corDosOlhos: cor}; 
}
    console.log(setCorRoupa(pessoa, 'verde'));
////// Class

class Pessoas {
    nome: string;
    sobrenome: string;
    idade: number;
    corDosOlhos: string;
    peso: number;
    
    constructor(nome: string, sobrenome: string, idade: number, corDosOlhos: string, peso: number){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.corDosOlhos = corDosOlhos;
        this.peso = peso;
    }
}

const pessoas = new Pessoas( 'Matheus', 'Ferreira', 32, 'castanho', 80);
console.log(pessoas);


export default Pessoa;
