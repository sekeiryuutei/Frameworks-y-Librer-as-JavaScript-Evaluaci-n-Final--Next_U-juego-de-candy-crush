// Start
$(function () {
  juego();
});

//global
var puntuacion = movimientos = clicks = 0;

function juego() {
  colorTitulo("h1.main-titulo");
  //borrar los 2 de abajo cuando hagas el evento click del inicio para  que no comience sin darle click*****
  randomSrc();
  llenarTodos();
  //$('.btn-reinicio').click(function () {
  //	if ($(this).text() === 'Reiniciar') {
  //		location.reload(true);
  //	}
  //	checkBoard();
  //	$(this).text('Reiniciar');
  //	$('#timer').startTimer({
  //		onComplete: endGame
  //	})
  //	});
}
/*
function firstClickIniciar(){
  clicks++;
  if(clicks==1){
    var tiempo = 60 * 2; //Minutos para el juego
    $('.btn-reinicio').text('Reiniciar');
    llenarTodos();
    startTimer(tiempo, $("#timer"));
    postJugada();
  }else{
    location.reload();
  }

}*/
//punto 1. Funcion recursiva primero pinta blanco, espera y pinta amarillo para volver a llamarse asi misma. 
function colorTitulo(selector) {
  $(selector).animate({ color: "white" }, "slow");
  setInterval(function(){$(selector).animate({ color: "yellow" }, "slow");
  colorTitulo("h1.main-titulo"); }, 2300);
}
//punto 2. funcion para generar números aleatorios

//Función auxiliar que retorna una ruta de imágen aleatoria dentro de un set definido de rutas
function randomSrc(){
  var aleatorio =	Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  var sources = ['image/1.png', 'image/2.png', 'image/3.png', 'image/4.png'];
  console.log(aleatorio);
  return sources[aleatorio]
}
//Función auxiliar que suma los movimientos del jugador
function sumarMovimiento(){
  movimientos++;
  $('#movimientos-text').text(movimientos);
}

function llenarElemento(columna, espacios){
  for (var i = 0; i < espacios; i++) {
    //$(columna).prepend("<img src='"+randomSrc()+"' class='elemento'/>")
    var elemento = document.createElement("img");
    $(elemento)
      .attr("src", randomSrc())
      .addClass("elemento")
      .draggable({
        grid: [120,90],
        revert: "valid"
      })
      .droppable({
        accept: ".elemento",
        drop: function(event, ui){
          var srcFrom = $(this).attr("src");
          var srcTo = $(ui.draggable).attr("src");
          $(this).attr("src", srcTo);
          $(ui.draggable).attr("src", srcFrom);
          window.setTimeout(postJugada, 500);
          sumarMovimiento();
        }

      })
    $(columna).prepend(elemento);
  }
}
//Función que llena todas las casillas de la cuadrícula para iniciar el juego
function llenarTodos(){
  var columna;
  for (var i = 1; i <= 7; i++) {
    columna = ".col-"+i;
    llenarElemento($(columna), 7);
  }
}