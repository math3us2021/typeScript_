//// Class modelo abreviado, não utilizando o this
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

export class Carro2 {
    public readonly modelo: string;
    public readonly ano: number;
        constructor(modelo: string, ano: number){
            this.modelo = modelo;
            this.ano = ano
        }
}

const palio = new Carro2 ('Palio', 2007);
console.log(palio);
