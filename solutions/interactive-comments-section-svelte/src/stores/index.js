import { writable } from 'svelte/store';
import d from '../data.json';

function createData() {
  const { subscribe, set, update } = writable(d);

  return { subscribe };
}

export const data = createData();
