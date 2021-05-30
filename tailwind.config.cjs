const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.svelte'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			// Build your palette here
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.coolGray,
			red: colors.red,
			blue: colors.lightBlue,
			yellow: colors.amber
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
