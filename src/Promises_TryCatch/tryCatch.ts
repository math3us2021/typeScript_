////////////////// TRABALHANDO COM TRY/CATCH //////////////////////

const livro: string = "O Senhor dos Anéis";
function testeTryCatch() {
    if (livro === "O Senhor dos Anéis") {
        try {
            throw Error("Erro teste");
        } catch (error) {
            console.error("****  O erro foi detectado  **** ", error);
        } finally {
            console.log("Finally, Testando try catch");
        }
        console.log("Teste");
    }
}
setTimeout(() => { 
    testeTryCatch();
}, 2000);