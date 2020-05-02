// Start
$(function () {
  juego();
});
function juego() {
  colorTitulo("h1.main-titulo");

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


//punto 1. Funcion recursiva primero pinta blanco, espera y pinta amarillo para volver a llamarse asi misma. 
function colorTitulo(selector) {
  $(selector).animate({ color: "white" }, "slow");
  setInterval(function(){$(selector).animate({ color: "yellow" }, "slow");
  colorTitulo("h1.main-titulo"); }, 2300);
}
//punto 2. funcion para generar números aleatorios
