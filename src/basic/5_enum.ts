/// Enum permite criar um conjunto de valores que podem ser usados como constantes. Enum é um tipo especial de variável que não pode ser reatribuído, e tanto o nome ou valor pode ser usado para chamar qualquer um dos lados. 
 
 enum Cores{
        vermelho = 10,
        azul,
        verde,
        amarelo,
        roxo = 'roxo',
        branco = 'brancoooo',
 }

 console.log(Cores[10]);
 console.log(Cores.vermelho);
 console.log(Cores.branco);

 function escolhaCor(cor: Cores){
        return cor === Cores.vermelho ? 'Vermelho' : 'Não é vermelho';
        // console.log(escolhaCor(cor));
 }
    escolhaCor(Cores.vermelho);
