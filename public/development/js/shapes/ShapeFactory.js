define([
	'shapes/Circle',
	'shapes/Square',
	'shapes/Triangle'
], function (Circle, Square, Triangle) {

	function ShapeFactory () {

		var shapeFactory = this;

		this.shapeList = [
			'circle',
			'square',
			'triangle'
		];

		ShapeFactory = function () {
			return shapeFactory;
		};

	}

	ShapeFactory.prototype.constructor = function (type) {

		if(type === 'circle') {
			return Circle;
		}

		if(type === 'square') {
			return Square;
		}

		if(type === 'triangle') {
			return Triangle;
		}

	};

	ShapeFactory.prototype.newShape = function (index) {

		var type = this.shapeList[index % this.shapeList.length];
		return this.constructor(type);

	};

	return ShapeFactory;

});