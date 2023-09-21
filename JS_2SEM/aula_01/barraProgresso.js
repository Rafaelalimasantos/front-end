function animarBarraProgresso()
{
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso= $(".progress");

    var intervalo = setInterval(function(){
        if(progresso > 100)
        {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage =`url("https://images.pexels.com/photos/18275094/pexels-photo-18275094/free-photo-of-cidade-meio-urbano-londres-pessoas.jpeg?auto=compress&cs=tinysrgb&w=600")`
        }
        else{
            progresso++;
            barra.css("width", progresso + "%");
        }
    },50);
    
}