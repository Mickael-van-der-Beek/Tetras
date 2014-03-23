define([

], function () {

	function Square () {

		var square = this;

		this.type = 'square';

		Square = function () {
			return square;
		};

	}

	Square.prototype.preRender = function () {
		var context = this.canvas.getContext('2d');
		
		context.beginPath();

			context.rect(this.x, this.y, this.size, this.size);
			context.fillStyle = 'yellow';
			context.fill();
			context.lineWidth = 7;
			context.strokeStyle = 'black';
			context.stroke();

		context.closePath();
		context.save();
	}

	return Square;

});