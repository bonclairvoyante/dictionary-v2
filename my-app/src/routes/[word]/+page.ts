import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`${URL}${params.word}`);

	if (!response.ok) {
		error(response.status, 'Sorry! Not found. 🤨');
	}
	const definition = await response.json();
	return {
		definition
	};
};
