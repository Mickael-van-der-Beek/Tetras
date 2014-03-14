define([

], function () {

	function GameState (ShapeLayer) {

		var state = this;

		this.shapes = [];

		this.ShapeLayer = ShapeLayer;

		GameState = function () {
			return state;
		};

	}

	GameState.prototype.nextState = function (interval) {
		var shape;
		var shapes = this.shapes;
		var ShapeLayer = this.ShapeLayer;
		for(var i = 0, len = shapes.length; i < len; i++) {
			shape = shapes[i];
			shape.render(ShapeLayer, interval);
		}
	};

	GameState.prototype.addShape = function (shape) {
		this.shapes.push(shape);
	};

	return GameState;

});