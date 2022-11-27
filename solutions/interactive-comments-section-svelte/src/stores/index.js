import { v4 as uuid } from 'uuid';

import { writable } from 'svelte/store';
import d from '../data.json';
import { voteTypes } from '../utils/constants';

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

const findCommentByIdPath = (idPath, comments) => {
  let comment = comments.find((c) => idPath[0] === c.id);
  if (idPath.length === 1) {
    return comment;
  }
  return findCommentByIdPath(idPath.slice(1), comment.replies);
};

const makeComment = (content, user, parentIds = []) => ({
  id: uuid(),
  content,
  createdAt: 'just now',
  score: 0,
  user: user,
  replies: [],
  parentIds,
});

export const data = createData();
