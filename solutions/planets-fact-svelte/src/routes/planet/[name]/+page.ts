import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import data from '../../../data.json';

export const load = (({ params }) => {
	const planet = data.find((planet) => planet.name.toLowerCase() === params.name);
	if (planet) {
		return planet;
	}
	throw error(404, 'Not found');
}) satisfies PageLoad;
