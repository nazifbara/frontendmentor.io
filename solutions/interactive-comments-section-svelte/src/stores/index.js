import { writable } from 'svelte/store';
import d from '../data.json';
import { voteTypes } from '../utils/constants';
import { findCommentByIdPath, makeComment } from '../utils/helpers';

function createData() {
  const { subscribe, set, update } = writable({
    ...d,
    replyCommentId: null,
    editCommentId: null,
    votes: {},
  });

  return {
    subscribe,
    showReplyForm: (commentId) =>
      update((data) => ({ ...data, replyCommentId: commentId })),

    editComment: (commentId) =>
      update((data) => ({ ...data, editCommentId: commentId })),

    updateComment: (content, idPath) =>
      update((data) => {
        let comment = findCommentByIdPath(idPath, data.comments);
        comment.content = content;
        data.editCommentId = null;
        return data;
      }),

    reply: (content, idPath = []) =>
      update((data) => {
        const newComment = makeComment(content, data.currentUser, idPath);

        if (idPath.length === 0) {
          data.comments.push(newComment);
        } else {
          let comment = findCommentByIdPath(idPath, data.comments);
          comment.replies = [newComment, ...comment.replies];
        }

        return data;
      }),

    vote: (type, idPath) =>
      update((data) => {
        let comment = findCommentByIdPath(idPath, data.comments);
        if (data.votes[comment.id]) {
          return;
        }
        voteTypes.UP === type ? comment.score++ : comment.score--;
        data.votes[comment.id] = type;
        return data;
      }),
  };
}

export const data = createData();
