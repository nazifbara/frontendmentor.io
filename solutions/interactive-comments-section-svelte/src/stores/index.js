import { writable } from 'svelte/store';
import d from '../data.json';
import { voteTypes } from '../utils/constants';
import { findCommentByIdPath, makeComment } from '../utils/helpers';

function createData() {
  const { subscribe, set, update } = writable({
    ...d,
    replyCommentId: null,
    replyHandle: null,
    editCommentId: null,
    votes: {},
  });

  return {
    subscribe,
    showReplyForm: (comment) =>
      update((data) => ({
        ...data,
        replyCommentId: comment.id,
        replyHandle: `@${comment.user.username}`,
      })),

    editComment: (commentId) =>
      update((data) => ({ ...data, editCommentId: commentId })),

    deleteComment: (commentId, parentIds) =>
      update((data) => {
        let comments = null;
        let parentComment = null;

        if (parentIds.length === 0) {
          comments = data.comments;
        } else {
          parentComment = findCommentByIdPath(parentIds, data.comments);
          comments = parentComment.replies;
        }

        const commentIndex = comments.findIndex((c) => c.id === commentId);
        comments = [
          ...comments.slice(0, commentIndex),
          ...comments.slice(commentIndex + 1),
        ];

        parentComment
          ? (parentComment.replies = comments)
          : (data.comments = comments);

        return data;
      }),

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
