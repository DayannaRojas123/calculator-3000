const display= document.querySelector('#display')
const valor=document.querySelectorAll(".valor")
const operador=document.querySelector('#operador')

const suma=document.querySelector('#suma')
const resta=document.querySelector('#resta')
const multi=document.querySelector('#multi')
const division=document.querySelector('#division')
const igual=document.querySelector('#igual')
const borrar=document.querySelector('#borrar')

let a=+valor[0].value
let b=+valor[1].value
let c=0


igual.addEventListener('click',()=>{

    b=+display.textContent

    if(operador.textContent==='+'){

      display.innerText= a+b
      valor[1].value=valor[0].value
      valor[0].value=''

    }else if(operador.textContent==='-'){
        display.innerText= a-b
        valor[1].value=valor[0].value
        valor[0].value=''

    }else if (operador.textContent==='*'){
        display.innerText= a*b
        valor[1].value=valor[0].value
        valor[0].value=''

    }else if(operador.textContent==='/'){
        display.innerText= a/b
        valor[1].value=valor[0].value
        valor[0].value=''
    }else
    {
        display.innerText= 'error'

    }


})

suma.addEventListener('click',()=>{
    operador.textContent='+'
    a=+display.textContent
    c=c+a
    display.textContent=''   

})

resta.addEventListener('click',()=>{


    operador.textContent='-'
    a=+display.textContent
    c=c+a
    display.textContent=''  


})

multi.addEventListener('click',()=>{


    operador.textContent='*'
    a=+display.textContent
    c=c+a
    display.textContent=''  
 

})

division.addEventListener('click',()=>{


    operador.textContent='/'
    a=+display.textContent
    c=c+a
    display.textContent=''  

})

borrar.addEventListener('click',()=>{
  
    display.textContent=''
    valor[0]=''
    valor[1]=''

 
})




for(let i=0;i<=9;i++)
    document.getElementById('num'+i).addEventListener('click',presion)




function presion(evento){

     display.innerText=display.innerText+evento.target.value

}



