function fn(cb){
    console.log('executar função de callback')
    console.log(typeof cb)
    cb()
}

function callback(){
    console.log('função passada por paramentro')
}

fn(callback)

const objeto= {
    nome:"herich",
    callback
}
objeto.callback()