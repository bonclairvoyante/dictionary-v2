import { writable } from 'svelte/store';
import { browser } from '$app/environment';
export const font = (() => {
	let initialFont = 'font-sans';
	if (browser) {
		initialFont = localStorage.getItem('font') ?? initialFont;
	}
	const { subscribe, set } = writable(initialFont);
	return {
		subscribe,
		use: (font: string) => {
			localStorage.setItem('font', font);
			set(font);
		}
	};
})();
