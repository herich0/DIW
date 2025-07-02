(function(){
    'use strict';
    const txtTitulo= document.getElementById('txtTitulo')
    const btn = document.getElementById('btn')
    const formCadastro = document.querySelector('.formCadastro')
    const feedbackMessage = document.getElementById('feedbackMessage')
    const feedbackMessageClosebtn = feedbackMessage.getElementsByTagName('button')[0]
    formCadastro.addEventListener('submit',function(e){
        if(!txtTitulo.value){
            showErrorMessage('preencha todos os campos',function(){
                txtTitulo.focus()
            })
            e.preventDefault()
        }
    })

    function showErrorMessage(msg, cb){
        //alert(msg)
        feedbackMessage.classList.add('show')
        feedbackMessage.getElementsByTagName('p')[0].textContent= msg
        feedbackMessageClosebtn.focus()

        function hideErrorMessage(){
            feedbackMessage.classList.remove('show')
            feedbackMessageClosebtn.removeEventListener('click',hideErrorMessage)
            feedbackMessageClosebtn.removeEventListener('keyup',pressedKeyboardBtn)
            if(typeof cb === 'function'){
                cb()
            }
        }

        function pressedKeyboardBtn(e){
            if(e.keyCode === 27){
                hideErrorMessage()
            }
        }

        feedbackMessageClosebtn.addEventListener('click',hideErrorMessage)
        feedbackMessageClosebtn.addEventListener('keyup',pressedKeyboardBtn)
    }
    const txtDescricao = document.getElementById('txtDescricao')
    const contadorContainer = document.getElementById('contador')
    const resta = contadorContainer.getElementsByTagName('span')[0]
    const maxima = txtDescricao.maxLength
    mostrarNumero(maxima)
    contadorContainer.style.display='block'
    function checkLength(){
        let numeroLetraDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetraDigitadas)
        mostrarNumero(caracteresRestantes)
    }
    function mostrarNumero(n){
        resta.textContent= n
    }
    txtDescricao.addEventListener('input', checkLength)
    const chkAceito=document.getElementById('chkAceito')
    btn.ariaDisabled = true
    chkAceito.addEventListener('change',function(){
        btn.disabled = !this.checked
    })
})()