(function(){
    const nomeUsuario="Herich"
    const elemento = document.querySelector(".top-bar p")
    console.log(elemento)
    if(nomeUsuario){
        elemento.innerHTML+="<b>" + nomeUsuario + "</b>"
    } else{
        const elementoRemover= elemento.parentElement
        console.log(elementoRemover)
        elementoRemover.parentElement.removeChild(elementoRemover)
    }
})()