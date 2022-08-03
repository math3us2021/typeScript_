export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade : number, /// fazer um encapsulamento, ao qual o usuario só pode acessar o que for passado. Só é permitido o uso dentro da classe
        protected cpf: string
        ){}
    getIdade(){
      return this.idade;
    }
    getCpf(){
        return this.cpf;
    }
    getNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa1 = new Pessoa ('Matheus', 'Ferreira',32, '40343394898');
console.log(pessoa1)
console.log(pessoa1.getNomeCompleto())

///Herança

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return "Tentando aprender Typescript "+ this.nome;
    }
}

const aluno1 = new Aluno ('Jose', 'Antonio',55,'111122255');
console.log(aluno1)