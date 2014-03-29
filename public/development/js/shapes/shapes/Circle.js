define([
	'../Shape'
], function (Shape) {

	function Circle (parameters) {

		var circle = this;

		Shape.call(this, parameters);

		this.type = 'circle';

		Circle = function () {
			return circle;
		};

	}

	Circle.prototype.render = Shape.prototype.render;

	Circle.prototype.getNextCoordinates = Shape.prototype.getNextCoordinates;

	Circle.prototype.preRender = function () {

		Shape.prototype.preRender.call(this);
		var context = this.context;

		context.beginPath();

			context.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
			context.fillStyle = 'yellow';
			context.fill();
			context.lineWidth = 7;
			context.strokeStyle = 'black';
			context.stroke();
			
		context.closePath();
		context.save();

	};

	return Circle;

});