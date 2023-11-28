const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		postcssPresetEnv({
			"browsers": [
				"last 2 versions",
				" not dead",
				" > 0.2%"
			],
			"features": {
				"nesting-rules": {
					"noIsPseudoSelector": false
				}
			}
		})
	]
}