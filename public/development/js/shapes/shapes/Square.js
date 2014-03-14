define([

], function () {

	function Square () {

		var square = this;

		this.type = 'square';

		Square = function () {
			return square;
		};

	}

	return Square;

});