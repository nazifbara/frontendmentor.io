import { error as svelteError } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const load = (async ({ params: { word } }) => {
	const response = await fetch(`${BASE_URL}${word}`);
	const definition = await response.json();

	if (!response.ok) {
		throw svelteError(response.status, {
			message: `${definition.message} ${definition.resolution}`
		});
	}

	return {
		definition: definition
	};
}) satisfies PageServerLoad;
