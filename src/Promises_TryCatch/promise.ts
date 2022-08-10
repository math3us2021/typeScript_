

//////////////// PROMISE ////////////////

function pegarId() {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 1500);
    });
}

pegarId().then((id) => {
    console.log(id);
}).catch((err) => {
    console.log(err); 
})

function buscaEmailNoBanco(id: number) {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("matheusbf.mf@gmail.com");
        }, 2000);
    });
}
buscaEmailNoBanco(5).then((email)=>{
    console.log(email);
}).catch((err)=>{
    console.log(err);
})


function enviarEmail(corpo: string, destinatario: number | string) {
    return new Promise<string>((resolve, rejects) => {
        setTimeout(() => {
            const deuErro = true;
            if (deuErro) {
                resolve("Email enviado com sucesso");
            } else {
                rejects("Fila Cheia");
            }
        }, 2000);
    });
}

enviarEmail("matheusbf.mf@gmai.com", 5).then((teste) => {
    console.log(teste);
}).catch((error) => {
    console.log(error);
})

async function principal() {
   const id = await pegarId();
   const email = await buscaEmailNoBanco(id);
   enviarEmail("Olá", email)
   .then(()=> {
    console.log("Email enviado com sucesso, id: " + id);
   }).catch ((err)=>{
         console.log(err)
    }
    )
}

   

principal()

 

// pegarId().then((id) => {
//     buscaEmailNoBanco(id).then((email)=>{
//         enviarEmail("Olá", email).then(()=>{
//             console.log("Email enviado com sucesso, id: " + id);
//         }).catch ((err)=>{
//             console.log(err)
//         })
//     }) 
// }); 

console.log("Finalizado");
