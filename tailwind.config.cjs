/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
      'sans': ['Oswald', 'system-ui',],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
    }
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		themes: ['light', 'synthwave', 'dark'],
		base: true
	}
};

module.exports = config;
