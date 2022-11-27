import { v4 as uuid } from 'uuid';

import { writable } from 'svelte/store';
import d from '../data.json';

function createData() {
  const { subscribe, set, update } = writable({ ...d, replyCommentId: null });

  return {
    subscribe,
    showReplyForm: (commentId) =>
      update((data) => ({ ...data, replyCommentId: commentId })),
    addComment: (textValue) =>
      update((data) => {
        data.comments.push({
          id: uuid(),
          content: textValue,
          createdAt: 'just now',
          score: 0,
          user: data.currentUser,
          replies: [],
        });

        return data;
      }),
  };
}

export const data = createData();
