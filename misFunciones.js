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

}


function tirarDados(){
    var Dad1=document.getElementById("Dad1");
    var Dad2=document.getElementById("Dad2");
    var status=document.getElementById("status")
var d1= Math.floor(Math.random() * 6) + 1;
var d2= Math.floor(Math.random() * 6) + 1;
var DadTotal= d1+d2;
Dad1.innerHTML=d1;
    Dad2.innerHTML=d2;
    status.innerHTML="Usted ha sacado un: "+DadTotal+"!!";
}