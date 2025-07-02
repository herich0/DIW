let valor = {n:10}

function mudaValor(obj){
    obj.n++
}

mudaValor(valor)
console.log('valor externo', valor)