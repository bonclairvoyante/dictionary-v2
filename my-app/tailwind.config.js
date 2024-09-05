/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/preline/preline.js'],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: [
		/*eslint-disable */
		require('preline/plugin')
		/*eslint-enable */
	]
};
