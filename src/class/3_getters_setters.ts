export class Carro {
    constructor(
       private _modelo: string, //colocar um _ ante para diferenciar
       readonly ano: number,
       readonly acessorios? : string
    ){
        this.modelo = _modelo;
    }

    set modelo(modelo:string) {
        console.log('SETTER CHAMADO');
           this._modelo = modelo;
        
    }

    get modelo():string {
        console.log('GETTER CHAMADO');
        return this._modelo;
    }
}

const newFiesta = new Carro ('Fiesta', 2010, 'Completo');
console.log(newFiesta);
newFiesta.modelo = 'Palio';
console.log(newFiesta.modelo)
console.log(newFiesta);