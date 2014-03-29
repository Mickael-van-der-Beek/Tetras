define([
	'ShapeFactory'
], function (ShapeFactory) {

	function EventHandler (gameState) {

		this.gameState = gameState;

		this.eventListeners = {};

		this.createShapeOnKeypress('A', 'triangle');

		this.createShapeOnKeypress('W', 'square');

		this.createShapeOnKeypress('D', 'circle');

		this.onKeypress();

	}

	EventHandler.prototype.createShapeOnKeypress = function (letter, type) {

		var charCode = letter.charCodeAt(0);
		this.eventListeners[charCode] = type;

	};

	EventHandler.prototype.onKeypress = function () {

		var shapeConstructor;
		var keyCode;
		var shape;
		var type;

		var me = this;
		window.onkeyup = function (e) {

			keyCode = e.which;
			type = me.eventListeners[keyCode];

			if(type !== undefined) {

				shapeConstructor = (new ShapeFactory()).newShape(type);
				shape = new shapeConstructor({
					x: 50,
					y: 50,
					speed_y: 10,
					speed_x: 10,
					size: 100
				});

				console.log('Shape : ' + shape.type);
				console.log(shape);

				me.gameState.addShape(shape);

			}

		};
	};

	return EventHandler;

});