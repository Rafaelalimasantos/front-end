//Selecionando botão pelo ID
const botao = document.querySelector('button');
const contadorElemento = document.querySelector('#contador');

//Inicializando contador
let contador = 0;

//função que sera chamada pelo eventListener
function contado()
{
    contador++;
    contadorElemento.textContent = contador;
}

//adicionando ouvinte do evento de click
botao.addEventListener('click', contado);
