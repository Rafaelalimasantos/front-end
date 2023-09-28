const paisSelecionado = document.querySelector('#paisSelecionado');
const infoPais = document.querySelector('#infoPais');

//Criando meus objetos

const informacoesPaises = {
    brasil: {
        nome: "Brasil",
        capital: "Brasília",
        populacao: "250 milhões",
        idioma: "Português"
    },
    eua: {
        nome: "Estados Unidos",
        capital: "Washington, D.C.",
        populacao: "331 milhões",
        idioma: "Inglês"
    },
    canada: {
        nome: "Canadá",
        capital: "Ottawa",
        populacao: "37 milhões",
        idioma: "Inglês e Francês"
    },
    franca: {
        nome: "França",
        capital: "Paris",
        populacao: "67 milhões",
        idioma: "Francês"
    },
};


//função para atualizar as informações do pais selecionado

function atualizarInformacoesPais()
{
    const paisSelecionadoValue = paisSelecionado.value;
    const paisInfo = informacoesPaises[paisSelecionadoValue];

    infoPais.textContent = `País: ${paisInfo.nome}, Capital: ${paisInfo.capital}, 
    População: ${paisInfo.populacao}, Idioma: ${paisInfo.idioma}`;
}

paisSelecionado.addEventListener('change', atualizarInformacoesPais);