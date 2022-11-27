import { v4 as uuid } from 'uuid';

import { writable } from 'svelte/store';
import d from '../data.json';

function createData() {
  const { subscribe, set, update } = writable({ ...d, replyCommentId: null });

  return {
    subscribe,
    showReplyForm: (commentId) =>
      update((data) => ({ ...data, replyCommentId: commentId })),

    addComment: (content) =>
      update((data) => {
        data.comments.push(makeComment(content, data.currentUser));

        return data;
      }),

    reply: (commentId, content) =>
      update((data) => {
        const comment = data.comments.find(({ id }) => id === commentId);
        comment.replies = [
          makeComment(content, data.currentUser),
          ...comment.replies,
        ];
        return data;
      }),
  };
}

const makeComment = (content, user) => ({
  id: uuid(),
  content,
  createdAt: 'just now',
  score: 0,
  user: user,
  replies: [],
});

export const data = createData();
