require([
	'GameLoop',
	'GameState',

	'EventHandler',
	'MobileEventHandler',

	'ForgroundGenerator',
	'BackgroundGenerator',

	'utils/PlatformDetection'
], function (GameLoop, GameState, EventHandler, MobileEventHandler, ForgroundGenerator, BackgroundGenerator, PlatformDetection) {

	function main () {

		var BackgroundLayer = new BackgroundGenerator();
		var ShapeLayer = new ForgroundGenerator();

		var gameState = new GameState(ShapeLayer);
		GameLoop(gameState);

		var eventHandler;
		if(PlatformDetection.isMobile()) {
			eventHandler = new MobileEventHandler(gameState);
		}
		else {
			eventHandler = new EventHandler(gameState);
		}

	}

	// When window is loaded run our main function
	//window.addEventListener('load', main, false);
	main();

});