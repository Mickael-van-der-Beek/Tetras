define([
	'GameState'
], function (GameState) {

	var w = window;
	var onNextFrame = w.requestAnimationFrame ||
		w.oRequestAnimationFrame ||
		w.msRequestAnimationFrame ||
		w.mozRequestAnimationFrame ||
		w.webkitRequestAnimationFrame ||
		function (callback) {
			// Frame-rate of 60 frames / s
			window.setTimeout(callback, 1000 / 60);
		}
	;

	var lastTickTime = Date.now()
	  , newTickTime
	  , interval;

	function GameLoop (gameState) {

		var tickCounter = 0;

		GameLoop = function () {

			console.log('Next tick - ' + tickCounter);
			tickCounter++;

			newTickTime = Date.now();
			interval = lastTickTime - newTickTime;

			gameState.nextState(interval);

			lastTickTime = newTickTime;

			// When rendering engine is ready go to next loop tick
			onNextFrame(GameLoop);
		};

		GameLoop();

	}

	return GameLoop;

});