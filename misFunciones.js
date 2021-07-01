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


    var img = new Image();
    var img2= new Image();
    img.src = "imagenes/d1.jpg";
    img2.src= "imagenes/d1.jpg";
    canvas.width=canvas.width;
    img.onload = function () {

        ctx.drawImage(img, 300, 250);
        ctx.drawImage(img2,500,250);
    }

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


// = Math.floor(Math.random() * 6) + 1;
var aux=6;//almacena el valor anterior de los dados, se inicia con 6
var aux2=0;//almacena el valor del selector
;//almacena estado ganador o perdedor (pseudo bool)
var interva;
function tirarDados() {
   interva = setInterval(dibujo,30);
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

var i=0;
function dibujo() {
    var canvas = document.getElementById("img_dados");
    var ctx = canvas.getContext("2d");
    var status = document.getElementById("status");
    var d1;
    var d2;
    var img = new Image();
    var img2 = new Image();


        d1 = Math.floor(Math.random() * 6) + 1;
        d2 = Math.floor(Math.random() * 6) + 1;
        canvas.width = canvas.width;
        if (d1 == 1) {
            img.src = "imagenes/d1.jpg";

        }
        if (d2 == 1) {
            img2.src = "imagenes/d1.jpg";

        }
        if (d1 == 2) {
            img.src = "imagenes/d2.jpg";

        }
        if (d2 == 2) {
            img2.src = "imagenes/d2.jpg";

        }
        if (d1 == 3) {
            img.src = "imagenes/d3.jpg";

        }
        if (d2 == 3) {
            img2.src = "imagenes/d3.jpg";

        }
        if (d1 == 4) {
            img.src = "imagenes/d4.jpg";

        }
        if (d2 == 4) {
            img2.src = "imagenes/d4.jpg";

        }
        if (d1 == 5) {
            img.src = "imagenes/d5.jpg";

        }
        if (d2 == 5) {
            img2.src = "imagenes/d5.jpg";

        }
        if (d1 == 6) {
            img.src = "imagenes/d6.jpg";

        }
        if (d2 == 6) {
            img2.src = "imagenes/d6.jpg";

        }

        img.onload = function () {

            ctx.drawImage(img, 300, 250);
            ctx.drawImage(img2, 510, 250);


        }
    i +=1;
        //console.log(d1, d2, i);



if (i==10){
     clearInterval(interva);
     i=0;
    var DadTotal;
    var aux3=0
    DadTotal = d1 + d2;
    console.log(d1,d2,DadTotal);




    if (DadTotal==aux&& aux2==1){
        aux3=1;
    }
    if (DadTotal<aux&& aux2==3){
        aux3=1;

    }
    if (DadTotal>aux&& aux2==2){
        aux3=1;

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

}
