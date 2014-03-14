define([
	'Config'
], function (Config) {

	function ForgroundGenerator () {

		var canvas = document.getElementById('forground-canvas');
		var context = canvas.getContext('2d');

		this.canvas = canvas;
		this.context = context;
	}

	return ForgroundGenerator;

});