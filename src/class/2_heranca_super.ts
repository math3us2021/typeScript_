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

///Herança  .. extends 

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return "Tentando aprender Typescript "+ this.nome;
    }
}

const aluno1 = new Aluno ('Jose', 'Antonio',55,'111122255');
console.log(aluno1)
console.log(aluno1.getNomeCompleto())

export class Professor extends Pessoa {
    getNomeCompleto(): string {
        return "Professorrrr "+ this.nome;
    }
}
const professor1 = new Professor ('Maria', 'Silva',55,'111122255');
console.log(professor1)
console.log(professor1.getNomeCompleto())

/// Super, tem acesso a todos os atributos e métodos da classe pai

export class Funcionario extends Pessoa{
    constructor(
        nome: string,
        sobrenome: string,
        idade : number,
        cpf: string,
        public readonly cargo: string
        ){
            super(nome,sobrenome,idade,cpf);
        } /// aqui chamamos o construtor do elemento pai, e passamos os parametros atraves do super, e acrescentamos o cargo dentro do constructor. Esse cargo só estará ligado a class funcionário.
}

console.log(pessoa1)
const funcionario = new Funcionario ('Joao', 'Silva',32,'40343394898','Programador');
console.log(funcionario)
console.log(funcionario.getNomeCompleto())