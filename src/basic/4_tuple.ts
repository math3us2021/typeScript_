///Tuple
const dadosCliente1: readonly [number,string] = [1, 'matheus'];
const dadosCliente2: ReadonlyArray<string> = ['matheus', 'marcos'];///readonly é imutável

function dados(): string{
    if(dadosCliente1[1] === 'matheus'){
        console.log(dadosCliente2[1]);
    }
    return 'dados indeferidos';
        }
dados();


//////////////

    const dados3: string[] = ['matheus', 'marcos','marilda','Lara','Veronica'];
    const dados4: string[] = ['matheus', 'marcos','marilda','Lara','Veronica'];

    function dados2(): string[] {
        if(dados3[1] === 'marcos'){
            dados3[1] = 'elizabeth';
        }
        return dados3;
        }
    dados2();
    console.log(dados3);

    class Pessoa {
        nome: string;
        sobrenome: string;
        idade: number;
        constructor(nome: string, sobrenome: string, idade: number){
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.idade = idade;
        }
    }
    const pessoa1 = new Pessoa('matheus', 'ferreira', 23);
    const pessoa2 = new Pessoa('marcos', 'ferreira', 23);
    const pessoa3 = new Pessoa('marilda', 'ferreira', 23);
    const pessoa4 = new Pessoa('Lara', 'ferreira', 23);
    const pessoa5 = new Pessoa('Veronica', 'ferreira', 23);
    const pessoa6 = new Pessoa('matheus', 'ferreira', 23);

    const pessoas: Pessoa[] = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6];
    console.log(pessoas);

    class Carros {
        marca: string;
        ano: number;
        cor: string;
        valor: number;
          constructor(marca: string, ano: number, cor: string, valor: number){
            this.marca = marca;
            this.ano = ano;
            this.cor = cor;
            this.valor = valor;
          }
    }
    
    const Fiesta = new Carros ('Fiesta', 2005, 'Prata', 15.000);
    console.log(Fiesta);
            
    
