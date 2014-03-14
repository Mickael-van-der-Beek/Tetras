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

	return Circle;

});