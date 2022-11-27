import { writable } from 'svelte/store';
import d from '../data.json';

function createData() {
  const { subscribe, set, update } = writable({ ...d, replyCommentId: null });

  return {
    subscribe,
    showReplyForm: (commentId) =>
      update((data) => ({ ...data, replyCommentId: commentId })),
  };
}

export const data = createData();
