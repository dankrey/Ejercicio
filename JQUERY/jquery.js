
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


 //Funcion para definir si es par o impar 

$("#formEjemplo2").submit((ev) => {
  ev.preventDefault();
  let num = $("#num").val();
  let resultado = ParImpar(num);

   
  
  $("#resultado").val = resultado;



});


//FUNCION DEL BUSCADOR
$(document).ready(function(){

  $('#buscador').keyup(function(){
       var area = $('#texto');
       var areatxt = area.text().replace("<span>","").replace("</span>");
       var txtbuscado = $('#buscador').val();
       var txtRegEx = new RegExp("("+txtbuscado+")", "igm");    
       var outputtxt = areatxt.replace(txtRegEx ,"<span>$1</span>");
       area.html(outputtxt);
  });
  
});



//FUNCION DEL TEX AREA
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', TexArea);
             
function  TexArea(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

$("#formEjemplo2").submit((ev) => {
  ev.preventDefault();

 var texto =  $('#Texto_Agregar').val();
 $(".Texto_Metido").text(texto);
});










