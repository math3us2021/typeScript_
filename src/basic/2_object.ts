const objetoA = { // Neste caso a seleçãa de tipo, foi feita pelo TS
    chaveA: 'valor A',
    chaveB: 'valor B'
}
objetoA.chaveB = 'novo valor';
console.log(objetoA.chaveA);

const casa: {
    cor: string,
    tamanho: number,
} ={
    cor: 'azul',
    tamanho:100
}

