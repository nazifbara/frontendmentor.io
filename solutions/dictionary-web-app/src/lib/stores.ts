import { writable } from 'svelte/store';
import { browser } from '$app/environment';

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
