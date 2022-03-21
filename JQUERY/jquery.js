
//Creamos la Funcion
function ContarCaracter() {
    $("#result").val($("#caracter").val().length + " Caracteres"); //Detectamos los Caracteres del Input
    $("#result").addClass('NoVacio'); //Agregamos la Clase de NoVacio para decir que el input no esta vacio y que suba el Texto del Label(Como cuando haces Focus)
  } //Aqui termina la Funcion