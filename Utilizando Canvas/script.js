//atribui a uma variavel o elemento selecionado
canvas = document.querySelector('canvas');

//definir o tamanho do canva 
canvas.width = 800;
canvas.height = 600;

//a variavel c se torna um objeto onde
//pode ser atribuido métodos
c = canvas.getContext('2d');

//atribuimos propriedades e metodos ao nosso 
//objeto
//posiçoes(X, Y, width, height)
c.fillStyle = "red";
c.fillRect(100,80,50,50);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(100,30,50,70);
c.fillRect(100,400,800,100);

//desenhando uma linha

c.beginPath();
//posição inicio da linha
c.moveTo(50,450);
c.lineTo(700,50);
c.lineTo(500,300);
c.lineTo(700,300);
c.strokeStyle = "black";
c.stroke();
//encerra o caminho
c.closePath();

//criando um circulo
//posições para criação
//(X, Y, raio, anguloInicial, anguloFinal)

c.beginPath()
c.arc(400, 450, 100, 0, Math.PI * 2);
c.fillStyle = "rgba(0,0,225,0.5)";
c.stroke();
//cor interna
c.fill();
c.closePath();

//criando um laço para criar varios circulos randomicos

for(var i = 0; i < 10; i++)
{
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height; 

    c.beginPath();
    //Math.random * 100 deixa o tamanho aleatorio
    c.arc(x, y, Math.random() * 100, 0, Math.PI *2);
    //c.fillStyle = "rgba(0,0,255,0.5)";
    c.fillStyle = "rgba("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+",0.5)";
    c.stroke();
    c.fill();
    c.closePath();
}