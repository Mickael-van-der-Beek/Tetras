define([

], function () {

	function Shape (parameters) {

		var shape = this;

		// Type of shape (redefined by child Class)
		this.type = null;

		// Coordinates
		this.x = parameters.x;
		this.y = parameters.y;

		// Speed
		this.speed_y = parameters.speed_y;
		this.speed_x = parameters.speed_x;

		// Size / Diameter
		this.size = parameters.size;

		// Pre-rendering shape on canvas
		this.canvas = null;
		this.preRender();

		return this.canvas;
	}

	Shape.prototype.getNextCoordinates = function (interval) {
		return {
			x: this.x + 10,
			y: this.y + 10
		};
	};

	Shape.prototype.preRender = function () {
		var canvas = document.createElement('canvas');
		canvas.width = this.size;
		canvas.height = this.size;
		var context = canvas.getContext('2d');

		this.constructor.render(context);
		this.canvas = canvas;
	};

	Shape.prototype.render = function (ShapeLayer, interval) {
		context.fillRect(this.x, this.y, this.size, this.size);

		var nextCoordinates = this.getNextCoordinates(interval);
		this.x = nextCoordinates.x;
		this.y = nextCoordinates.y;

		context.drawImage(this.canvas, this.x, this.y);
	};

	return Shape;

});