import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		screens: {
			'sm': '576px',
			// => @media (min-width: 576px) { ... }
	  
			'md': '960px',
			// => @media (min-width: 960px) { ... }
	  
			'lg': '1440px',
			// => @media (min-width: 1440px) { ... }
		  },
		  fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		  }
	},

	plugins: [typography, forms, containerQueries]
};
