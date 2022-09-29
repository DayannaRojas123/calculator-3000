const display= document.querySelector('#display')
const valor=document.querySelectorAll('.valor')
const operador=document.querySelector('#operador')

const suma=document.querySelector('#suma')
const resta=document.querySelector('#resta')
const multi=document.querySelector('#multi')
const division=document.querySelector('#division')
const igual=document.querySelector('#igual')
const borrar=document.querySelector('#borrar')


igual.addEventListener('click',()=>{


    let a=+valor[0].value
let b=+valor[1].value

    if(operador.textContent==='+'){

      display.innerText= a+b

    }else if(operador.textContent==='-'){
        display.innerText= a-b

    }else if (operador.textContent==='*'){
        display.innerText= a*b

    }else if(operador.textContent==='/'){
        display.innerText= a/b
    }else
    {
        display.innerText= 'error'

    }


})

suma.addEventListener('click',()=>{


    operador.textContent='+'

})

resta.addEventListener('click',()=>{


    operador.textContent='-'

})

multi.addEventListener('click',()=>{


    operador.textContent='*'

})

division.addEventListener('click',()=>{


    operador.textContent='/'

})