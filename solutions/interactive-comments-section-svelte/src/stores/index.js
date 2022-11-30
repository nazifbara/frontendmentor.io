import { writable } from 'svelte/store';
import d from '../data.json';
import { voteTypes } from '../utils/constants';
import { findCommentByIdPath, makeComment, getIdPath } from '../utils/helpers';

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

    editComment: (comment) =>
      update((data) => ({ ...data, editCommentId: comment.id })),

    deleteComment: (comment) =>
      update((data) => {
        let comments = null;
        let parentComment = null;

        if (comment.parentIds.length === 0) {
          comments = data.comments;
        } else {
          parentComment = findCommentByIdPath(comment.parentIds, data.comments);
          comments = parentComment.replies;
        }

        const commentIndex = comments.findIndex((c) => c.id === comment.id);
        comments = [
          ...comments.slice(0, commentIndex),
          ...comments.slice(commentIndex + 1),
        ];

        parentComment
          ? (parentComment.replies = comments)
          : (data.comments = comments);

        return data;
      }),

    updateComment: (newContent, comment) =>
      update((data) => {
        let _comment = findCommentByIdPath(getIdPath(comment), data.comments);
        _comment.content = newContent;
        data.editCommentId = null;
        return data;
      }),

    reply: (content, parentComment) =>
      update((data) => {
        const parentIdPath = parentComment ? getIdPath(parentComment) : [];

        const newComment = makeComment(content, data.currentUser, parentIdPath);

        if (parentIdPath.length === 0) {
          data.comments.push(newComment);
        } else {
          let comment = findCommentByIdPath(parentIdPath, data.comments);
          comment.replies = [newComment, ...comment.replies];
        }

        return data;
      }),

    vote: (type, comment) =>
      update((data) => {
        let _comment = findCommentByIdPath(getIdPath(comment), data.comments);
        if (data.votes[_comment.id]) {
          return data;
        }
        voteTypes.UP === type ? _comment.score++ : _comment.score--;
        data.votes[_comment.id] = type;
        return data;
      }),
  };
}

export const data = createData();
