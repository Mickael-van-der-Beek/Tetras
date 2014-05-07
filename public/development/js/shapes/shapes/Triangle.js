define([
	'../Shape'
], function (Shape) {

	function Triangle (parameters) {

		var triangle = this;

		Shape.call(this, parameters);

		this.type = 'triangle';

		Triangle = function () {
			return triangle;
		};

	}

	Triangle.prototype.render = Shape.prototype.render;

	Triangle.prototype.getNextCoordinates = Shape.prototype.getNextCoordinates;

	Triangle.prototype.preRender = function () {

		Shape.prototype.preRender.call(this);
		var context = this.context;

		var h = this.size * (Math.sqrt(3)/2);

		context.strokeStyle = "#ff0000";

		context.save();
		context.translate(this.x, this.y);
		
		context.beginPath();
			
			context.moveTo(0, -h / 2);
			context.lineTo(-this.size / 2, h / 2);
			context.lineTo(this.size / 2, h / 2);
			context.lineTo(0, -h / 2);
	
			context.fillStyle = 'yellow';
			context.fill();
			context.lineWidth = 7;
			context.strokeStyle = 'black';
			context.stroke();
			
		context.closePath();
		context.save();

	};

	return Triangle;

});