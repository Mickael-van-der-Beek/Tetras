define([
	'Config'
], function (Config) {

	function BackgroundGenerator () {

		var canvas = document.getElementById('background-canvas');
		var context = canvas.getContext('2d');

		var backgroundColor = Config.backgroundColor;
		context.fillStyle = backgroundColor;

		var width = context.canvas.width;
		var height = context.canvas.height;
		context.fillRect(0, 0, width, height);

		this.canvas = canvas;
		this.context = context;
	}

	return BackgroundGenerator;

});