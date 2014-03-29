define([
	'shapes/Circle',
	'shapes/Square',
	'shapes/Triangle'
], function (Circle, Square, Triangle) {

	function ShapeFactory () {

		var shapeFactory = this;

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

	ShapeFactory.prototype.newShape = function (type) {

		return this.constructor(type);

	};

	return ShapeFactory;

});