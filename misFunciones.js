/**

* Esta es una funcion para ingresar al juego en si
* @method CargarWeb
* @param N/A
* @param N/A
* @return N/A
*/

function CargarWeb(){
    var URLcomp,nombre;
nombre= document.getElementById("nombre");
    URLcomp= "Juego.html#"+nombre.value;
    window.open(URLcomp,"_self")

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
    window.open(URLcomp, "_self")

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
    window.open(URLcomp,"_self")

}

/**

 * Esta es una funcion para dibujar en el canvas
 * @method dibujarDados
 * @param N/A
 * @param N/A
 * @return canvas
 */
var non;
function dibujarDados(){
    var URLcomp;
var canvas= document.getElementById("img_dados");
var ctx=canvas.getContext("2d");

ctx.fillStyle="#ffffff";
ctx.fillRect(120,150,50,50);

ctx.fillRect(200,150,50,50);
    ctx.font = "30px Arial";
    ctx.strokeText("0", 138, 185);
    ctx.strokeText("0", 218, 185);
    URLcomp= window.location.href.split("/")[4];
    non=URLcomp.split("#")[1];
}
/**

 * Esta es una funcion para tirar los dados
 * @method tirarDados
 * @param {number} DadTotal- la suma de d1 y d2
 * @param {number} aux- salva el valor anterior del dado
 * @return DadTotal;Status;
 */

var DadTotal;
var aux=6;//almacena el valor anterior de los dados, se inicia con 6
var aux2=0;//almacena el valor del selector
var aux3=0;//almacena estado ganador o perdedor (pseudo bool)
function tirarDados(){

    var status=document.getElementById("status");
    var canvas= document.getElementById("img_dados");
    var ctx=canvas.getContext("2d");

var d1= Math.floor(Math.random() * 6) + 1;
var d2= Math.floor(Math.random() * 6) + 1;
 DadTotal= d1+d2;



    ctx.fillRect(120,150,50,50);
    ctx.strokeText(d1, 138, 185);
    ctx.fillRect(200,150,50,50);
    ctx.strokeText(d2, 218, 185);

    status.innerHTML="Usted ha sacado un: "+DadTotal+" !!";
if (DadTotal==aux&& aux2==1){
    aux3=1;
    status.innerHTML="Usted ha sacado un: "+DadTotal+" !!";

}
  if (DadTotal<aux&& aux2==3){
        aux3=1;
        status.innerHTML="Usted ha sacado un: "+DadTotal+"!! " ;
    }
    if (DadTotal>aux&& aux2==2){
        aux3=1;
        status.innerHTML="Usted ha sacado un: "+DadTotal+" !!";
    }
    if(aux3==1){
        status.innerHTML=""+non+" ha sacado un: "+DadTotal+".  Ha ganado!!";
    }
    else if(aux3==0){

        status.innerHTML=""+non+" ha sacado un: "+DadTotal+".  mejor suerte para la proxima";
    }
    if (aux2==0){
        status.innerHTML="seleccione una opcion (superior,inferior,igual) para jugar";

    }
    aux=DadTotal;
    aux3=0;
}

/**

 * Esta es una funcion para tener el valor de aux3
 * @method seleccion
 * @param {radio} select- el valor de la seleccion
 * @param {number} aux3- sirve para seguir usando la funcion TirarDados
 * @return aux3
 */

function seleccion(select) {

    if (select == "igual") {
        aux2 = 1;
    }
    if (select == "superior") {
        aux2 = 2;
    }
    if (select == "inferior") {
        aux2 = 3;
    }
}

