const lista = [
{
    name: 'OMO',
    preco: 30,
},
 {
     name: 'cereal',
     preco: 15,
}, 
 {
 name: 'pano',
 preco: 30,
}
];

const saldoDisponivel = 100;

function somaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(somaSaldo(saldoDisponivel, lista));