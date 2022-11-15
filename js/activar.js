




let int1 = document.getElementById("intro1");
function seguir(){
document.getElementById("titulo1").style.display = "none";
document.getElementById("podio").style.display = "flex";
document.getElementById("input1").style.display="none";
document.getElementById("input2").style.display="inherit";

setTimeout(aparecertxt, 3000);

}
function aparecertxt(){
document.getElementById("OMS").style.display = "inherit";
document.getElementById("amian").style.display = "inherit";
setTimeout(aparecericon,2000);
}
function aparecericon(){
  document.getElementById("cont").style.display = "inherit";
  setTimeout(aparecenico,2000);
}
function aparecenico(){
  document.getElementById("ar").style.display = "inherit";
}


// ALERTA PARA VER SI FUNCIONA JQUERY//


window.onload = function() {
  if (window.jQuery) {  
      // jQuery is loaded  
      alert("Yeah!");
  } else {
      // jQuery is not loaded
      alert("Doesn't Work");
  }
}

$(".container").mapael({
  map : {
      name : "localidades"
      
  }
});

