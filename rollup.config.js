import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';

const isProd = process.env.NODE_ENV === 'production';

const rollupConfig = {
	input: 'src/vue-v.js',
	plugins: [
		babel(),
		isProd && terser(),
		isProd && filesize(),
	],
	output: [
		{
			format: 'umd',
			file: 'dist/vue-v.js',
			name: 'vueV',
			exports: 'default',
		},
		{
			format: 'es',
			file: 'dist/vue-v.esm.js',
		},
	],
};

export default rollupConfig;
