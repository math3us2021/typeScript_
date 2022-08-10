//// Class modelo abreviado, não utilizando o this
//Public é acessado por todos os elementos da classe
//Private é acessado apenas por elementos da classe
//Protected é acessado por elementos da classe e por elementos filhos
//


export class Carro {
     constructor(
        readonly modelo: string,
        readonly ano: number,
        readonly acessorios? : Acessorios[]
     ){}
}

export class Acessorios {
    constructor(
        readonly vidro: boolean,
        readonly tetoSolar: boolean,
        readonly arCondicionado: boolean,
        readonly direcaoHidraulica: boolean
    ){}
}

const completo = new Acessorios (true, true, true, true);
const basico = new Acessorios (false, false, false, false);

const fiestaC = new Carro ('Fiesta', 2010, [completo]);
const fiestaB= new Carro ('Fiesta', 2010, [basico]);
console.log(fiestaC);
console.log(fiestaB);

///// modelo Antigo ou maior

export class Carro2 { // se for usar o atalho tem q usar o plublic, private ou protected
    public readonly modelo: string;
    public readonly ano: number;
        constructor(modelo: string, ano: number){
            this.modelo = modelo;
            this.ano = ano
        }
}

const palio = new Carro2 ('Palio', 2007);
console.log(palio);
