/**

* Esta es una funcion para ingresar al juego en si
* @method CargarWeb
* @param N/A
* @param N/A
* @return N/A
*/

function CargarWeb(){
    var URLcomp;

    URLcomp= "Juego.html";
    window.open(URLcomp)

}

/**

 * Esta es una funcion para regresar a la pagina principal
 * @method Regresar
 * @param N/A
 * @param N/A
 * @return N/A
 */


function Regresar(){
    var URLcomp;
    URLcomp= "index.html";
    window.open(URLcomp)

}
/**

 * Esta es una funcion para ingresar al tutorial del juego
 * @method Tutorial
 * @param N/A
 * @param N/A
 * @return N/A
 */
function Tutorial(){
    var URLcomp;
    URLcomp= "tutorial.html";
    window.open(URLcomp)

}


function dibujarDados(){
var canvas= document.getElementById("img_dados");
var ctx=canvas.getContext("2d");

ctx.fillStyle="#ffffff";
ctx.fillRect(120,150,50,50);

ctx.fillRect(200,150,50,50);
    ctx.font = "30px Arial";
    ctx.strokeText("0", 138, 185);
    ctx.strokeText("0", 218, 185);

}


function tirarDados(){

    var status=document.getElementById("status");
    var canvas= document.getElementById("img_dados");
    var ctx=canvas.getContext("2d");
var d1= Math.floor(Math.random() * 6) + 1;
var d2= Math.floor(Math.random() * 6) + 1;
var DadTotal= d1+d2;
    status.innerHTML="Usted ha sacado un: "+DadTotal+"!!";


    ctx.fillRect(120,150,50,50);
    ctx.strokeText(d1, 138, 185);
    ctx.fillRect(200,150,50,50);
    ctx.strokeText(d2, 218, 185);

}