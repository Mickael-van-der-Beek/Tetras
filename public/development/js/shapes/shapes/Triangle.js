define([

], function () {

	function Triangle () {

		var triangle = this;

		this.type = 'triangle';

		Triangle = function () {
			return triangle;
		};

	}

	Triangle.prototype.preRender = function () {
		var context = this.canvas.getContext('2d');
		var h = side * (Math.sqrt(3)/2);
			
		context.strokeStyle = "#ff0000";
			
		context.save();
		context.translate(this.x, this.y);
		
		context.beginPath();
			
			context.moveTo(0, -h / 2);
			context.lineTo( -this.size / 2, h / 2);
			context.lineTo(this.size / 2, h / 2);
			context.lineTo(0, -h / 2);
	
			context.fillStyle = 'yellow';
			context.fill();
			context.lineWidth = 7;
			context.strokeStyle = 'black';
			context.stroke();
			
		context.closePath();
		context.save();
	}

	return Triangle;

});