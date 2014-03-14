define([

], function () {

	var CollisionDetector = {

		isMobile: function () {
			return !!window.navigator.userAgent.match(/android|iphone|ipad/g);
		}

	};

	return CollisionDetector;

});