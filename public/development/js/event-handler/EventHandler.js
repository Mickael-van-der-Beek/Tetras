define([
	'Config',
	'ShapeFactory'
], function (Config, ShapeFactory) {

	function EventHandler (gameState) {

		this.gameState = gameState;

		this.createShapeOnClick();

	}

	EventHandler.prototype.createShapeOnClick = function () {

		var creationMaxTime = Config.creationMaxTime;
		var lastCreationTime = Date.now();
		var gameState = this.gameState;
		var clickCounter = 0;

		var creationTimeout;
		var newCreationTime;
		var shapeConstructor;
		var shape;

		window.onclick = function (e) {

			newCreationTime = Date.now();

			shapeConstructor = ShapeFactory().newShape(clickCounter);
			shape = new shapeConstructor();

			if(lastCreationTime - newCreationTime > creationMaxTime) {

				clearTimeout(creationTimeout);
				creationTimeout = setTimeout(function () {

					gameState.addShape(shape);
					lastCreationTime = newCreationTime;

				}, creationMaxTime);
			}

			clickCounter++;

		};

	};

	return EventHandler;

});