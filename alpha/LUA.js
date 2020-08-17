const w = {
    x: 800,
    y: 800
};
const pi = Math.PI
const tic = 16;
const tac = 16;
var seg = 0;
var min = 0;
var hora = 0;

function draw(){
    var canvas = document.getElementById('lua');
    //cria o contexto

    seg += 1/tic;
    if(seg>= 2 * pi){
        seg = 0
        min += 1/tic;
    }//se der uma volta completa, Seg se torna um e itera Min

    if (canvas.getContext){
        //abre o contexto
        
        var ctx = canvas.getContext('2d');
        let cor1 = "rgb(232, 147, 37)"

        function clear(){
            //limpa a tela

            ctx.clearRect(0, 0, w.x, w.y);
        }

        function corzinha(color){
            //define a cor do preenchimento

            ctx.fillStyle = color;
            ctx.strokeStyle = color;
        }

        function circulo(x, y, raio){
            //desenha um circulo simples

            ctx.beginPath();//abre um Path.
            ctx.arc(x, y, raio, 0, 2*pi);//desenha uma parte de um circulo
            ctx.fill();//preenche o  poligono.
        }
        
        function ponto(x, y){
            //desenha um pequeno ponto vermelho

            corzinha("red");
            circulo(x, y, 5);
        }

        function centro(x, y, a, r){
            //desenha um ponto em torno da posição, distancia de R, e gira A radianos.

            let x1 = Math.cos(a) * r + x;
            let y1 = Math.sin(a) * r + y;
            ponto(x1, y1);
        }

        clear();
        centro(400, 400, seg + 3*pi/2, 100);
        centro(400, 400, min + 3*pi/2, 80);
        ponto(400, 400);
        ctx.fillText(seg, 10, 10);
        ctx.fillText(min, 10, 20);
    }
}

function pitagoras(a, b){
    //retorna o valor do cateto com o teorema de pitagoras

    return (a**2 - b**2)**(1/2)
}

function radiano(a){
    //converte radiano para segundos

    return a/30 * pi;
}

setInterval(function () {
    draw();
  }, tic)  
