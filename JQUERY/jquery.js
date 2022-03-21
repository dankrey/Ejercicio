
//Creamos la Funcion
function ContarCaracter() {
    $("#result").val($("#caracter").val().length + " Caracteres"); //Detectamos los Caracteres del Input
    $("#result").addClass('NoVacio'); //Agregamos la Clase de NoVacio para decir que el input no esta vacio y que suba el Texto del Label(Como cuando haces Focus)
  } //Aqui termina la Funcion


 
  
  
  


function ParImpar(num) {
  // caso base
  if ( num==0 ){
    $("#captura").val("");
  // Si el resto de la división es 0, es par
  } if (num % 2 == 0 ){
     $("#captura").val("Par");
  // Si el resto no es 0, es impar.
  } else   {
    $("#captura").val("Impar");
  }  if (num < 0){
    
    alert("Es un Numero Negativo,por favor digita un entero positivo");

  }
}
  





$("#formEjemplo2").submit((ev) => {
  ev.preventDefault();
  let num = $("#num").val();
  let resultado = ParImpar(num);

   
  
  $("#resultado").val = resultado;



});









