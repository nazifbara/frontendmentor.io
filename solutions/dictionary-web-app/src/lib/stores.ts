import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const theme = (() => {
	let initialValue = 'light';

	if (browser && localStorage.getItem('theme')) {
		initialValue = localStorage.getItem('theme') ?? '';
	}

	if (
		browser &&
		!localStorage.getItem('theme') &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		initialValue = 'dark';
	}

	const { subscribe, update } = writable<string>(initialValue);

	return {
		subscribe,
		toggle: () =>
			update((theme) => {
				const newTheme = theme === 'light' ? 'dark' : 'light';
				browser && localStorage.setItem('theme', newTheme);
				return newTheme;
			})
	};
})();

export const font = (() => {
	let initialValue = 'font-sans';
	if (browser) {
		initialValue = localStorage.getItem('font') ?? initialValue;
	}
	const { subscribe, set } = writable<string>(initialValue);

	return {
		subscribe,
		use: (font: string) => {
			localStorage.setItem('font', font);
			set(font);
		}
	};
})();
