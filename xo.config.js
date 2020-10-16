module.exports = {
	rules: {
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'import/extensions': 'off',
	},
	overrides: [
		{
			files: 'test/*',
			env: 'jest',
		},
	],
};
