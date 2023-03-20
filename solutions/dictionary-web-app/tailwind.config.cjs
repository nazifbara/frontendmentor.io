/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Inter'],
			serif: ['Lora'],
			mono: ['Inconsolata']
		},
		extend: {
			colors: {
				body: '#FFF',
				body2: '#F4F4F4',
				text: '#2D2D2D',
				text2: '#757575',
				'body-dark': '#050505',
				'body2-dark': '#1F1F1F',
				'text-dark': '#FFF',
				'text2-dark': '#757575',
				primary: '#A445ED',
				danger: '#FF5252'
			},
			fontSize: {
				body: '1.125rem'
			}
		}
	},
	plugins: []
};
