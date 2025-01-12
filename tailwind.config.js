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
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
		  }
	},

	plugins: [typography, forms, containerQueries]
};
