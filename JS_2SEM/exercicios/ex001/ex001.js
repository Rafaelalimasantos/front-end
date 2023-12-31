var barraProgresso = document.querySelector(".progress");
//esconde a barra de progresso
barraProgresso.style.display = "none";




function enviar(){
    var nome = document.querySelector("#inputNome").value;
    var idade = parseInt(document.querySelector("#inputIdade").value);
    var cidade = document.querySelector("#inputCidade").value;


    var validaCampos = validar(nome, idade, cidade);
    if(validaCampos == true)
    {
        return;
    }
    //mostra a barra de progresso
    barraProgresso.style.display = "block";
    mostrarBarra(nome, idade, cidade);
}




function validar(nome, idade, cidade){
    if(nome == "" || idade == "" || cidade =="")
    {
        document.querySelector("#resultado").innerHTML = `
        <div class="alert alert-danger fade show">
                <span>Preencha todos os campos</span>
                <button type="button" class="close" data-dismiss="alert">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>`;
        return true;
    }
    else{
        var validandoIdade = validarIdade(idade);
        if(validandoIdade === false)
        {
            return false;
        }
        else{
            return true;
        }
    }
}


function validarIdade(idade)
{
    if(idade < 0 || idade > 150)
    {
        document.querySelector("#resultado").innerHTML = `
        <div class="alert alert-danger fade show">
                <span>Idade invalida</span>
                <button type="button" class="close" data-bs-dismiss="alert">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>`;
        return true;
    }
    else{
        return false;
    }
}


function mostrarBarra(nome, idade, cidade)
{
    var progress = 0;
    var barra = document.querySelector(".progress-bar");
    var intervalo = setInterval(function(){
        if(progress > 100)
        {
            clearInterval(intervalo);
            barraProgresso.style.display = "none";


            document.querySelector("#resultado").innerHTML = `
            <div class="alert alert-success fade show">
                    <span>${nome} ${idade} ${cidade}</span>
                    <button type="button" class="close" data-bs-dismiss="alert">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>`;
        }
        else{
            progress++;
            barra.style.width = progress + "%";
        }
    }, 50);
}
