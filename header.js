$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
	});

});


function mostraralerta(){
	alert('A través de bodegas rurales en puntos estratégicos para la distribución, eliminar intermediarios en el proceso de compra-venta, empoderando a los productores sobre la comercialización de su producción.');
}
function hacerclic(){
	document.getElementsByTagName('p')[0].onclick=mostraralerta;
}
window.onload=hacerclic;

var sel="";

function seleccion(e) {
    sel = window.getSelection();
    var str = sel.toString();
    if(str.length > 0){
    console.log(sel.toString());}
}
document.addEventListener("mousedown",function(){sel.empty();},false);
document.addEventListener("mouseup",seleccion,false);


function getStyleSheet(tituloUnico) {
  for(var i=0; i<document.styleSheets.length; i++) {
    var hojaEstilos = document.styleSheets[i];
    if(hojaEstilos.title == tituloUnico) {
      return hojaEstilos;
    }
  }
}
function colorElementRed(id) {
  var element = document.getElementById(id);
  element.style.color = "red";
}
function changeElement(id) {
  var element = document.getElementById(id);
  element.style.color = "red";
  element.style.fontSize = "15px";
  element.style.backgroundColor = "#FFFFFF";
}
