require.config({

	deps: ['main'],

	shim: {

	},

	paths: {
		// [Alias] Utils
		utils: './utils',

		// [Alias] Config
		config: './config',
		Config: './config/Config',

		// [Alias] Shapes
		shapes: './shapes/shapes',
		Shape: './shapes/Shape',
		ShapeFactory: './shapes/ShapeFactory',

		// [Alias] Game loop
		game_loop: './game-loop',
		GameLoop: './game-loop/GameLoop',

		// [Alias] Game state
		game_state: './game-state',
		GameState: './game-state/GameState',

		// [Alias] Event handlers
		event_handler: './event-handler',
		EventHandler: './event-handler/EventHandler',
		MobileEventHandler: './event-handler/MobileEventHandler',

		// [Alias] Collision detector
		collision_detector: './collision-detector',
		CollisionDetector: './collision-detector/CollisionDetector',

		// [Alias] Background generator
		forground_generator: './forground-generator',
		ForgroundGenerator: './forground-generator/ForgroundGenerator',

		// [Alias] Background generator
		background_generator: './background-generator',
		BackgroundGenerator: './background-generator/BackgroundGenerator'
	}

});