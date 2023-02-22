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
		extend: {
			fontSize: {
				h1: 'clamp(2rem, 0.33rem + 7.11vw, 2.5rem)',
				h2: '1.5rem',
				h3: '1.125rem',
				h4: '0.75rem',
				p: '0.938rem'
			},
			screens: {
				xs: '450px',
				'2xl': '1440px'
			},
			backgroundImage: {
				mainGradientTop: 'linear-gradient(to top, #FFC593, #BC7198, #5A77FF)',
				mainGradientRight: 'linear-gradient(to right, #FFC593, #BC7198, #5A77FF)',
				storyGradient: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), transparent 70%)'
			},
			maxWidth: {
				body: '1440px',
				container: '1110px'
			},
			colors: {
				textBase: 'hsl(0deg 0% 0% / 0.6)',
				textBaseDark: 'hsl(0deg 0% 100% / 0.6)',

				text: 'hsl(0deg 0% 0%)',
				textDark: 'hsl(0deg 0% 100%)',

				bg: 'hsl(0deg 0% 100%)',
				bgDark: 'hsl(0deg 0% 0%)',

				gray: 'hsl(0deg 0% 87%)'
			}
		}
	},
	plugins: []
};
