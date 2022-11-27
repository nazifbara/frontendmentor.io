import { writable } from 'svelte/store';
import d from '../data.json';

export const data = writable(d);
