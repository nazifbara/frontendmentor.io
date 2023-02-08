/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['DM Sans', 'sans-serif']
		},
		fontWeight: {
			regular: 400,
			bold: 700
		},
		colors: {
			textBase: 'hsl(0deg 0% 0% / 0.6)',
			textBaseDark: 'hsl(0deg 0% 100% / 0.6)',

			text: 'hsl(0deg 0% 0%)',
			textDark: 'hsl(0deg 0% 100%)'
		},
		extend: {
			fontSize: {
				h1: 'clamp(2rem, 2rem + 3vw, 2.5rem)',
				h2: '1.5rem',
				h3: '1.125rem',
				h4: '0.75rem',
				p: '0.938rem'
			},
			screens: {
				xs: '375px'
			},
			backgroundImage: {
				mainGradientTop: 'linear-gradient(to top, #FFC593, #BC7198, #5A77FF)'
			},
			maxWidth: {
				body: '1440px',
				container: '1110px'
			}
		}
	},
	plugins: []
};
