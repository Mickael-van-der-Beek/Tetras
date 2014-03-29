define([
	'../Shape'
], function (Shape) {

	function Square (parameters) {

		var square = this;

		Shape.call(this, parameters);

		this.type = 'square';

		Square = function () {
			return square;
		};

	}

	Square.prototype.render = Shape.prototype.render;

	Square.prototype.getNextCoordinates = Shape.prototype.getNextCoordinates;

	Square.prototype.preRender = function () {

		Shape.prototype.preRender.call(this);
		var context = this.context;
		
		context.beginPath();

			context.rect(this.x, this.y, this.size, this.size);
			context.fillStyle = 'yellow';
			context.fill();
			context.lineWidth = 7;
			context.strokeStyle = 'black';
			context.stroke();

		context.closePath();
		context.save();

	};

	return Square;

});