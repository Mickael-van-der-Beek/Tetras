define([
	'../Shape'
], function (Shape) {

	function Circle () {

		var circle = this;

		this.type = 'circle';

		Circle = function () {
			return circle;
		};

	}

	Circle.prototype.preRender = function () {
		var context = this.canvas.getContext('2d');

		context.beginPath();

			context.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
			context.fillStyle = 'yellow';
			context.fill();
			context.lineWidth = 7;
			context.strokeStyle = 'black';
			context.stroke();
			
		context.closePath();
		context.save();
	}

	return Circle;

});