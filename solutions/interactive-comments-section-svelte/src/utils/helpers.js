import { v4 as uuid } from 'uuid';

export const findCommentByIdPath = (idPath, comments) => {
  let comment = comments.find((c) => idPath[0] === c.id);
  if (idPath.length === 1) {
    return comment;
  }
  return findCommentByIdPath(idPath.slice(1), comment.replies);
};

export const makeComment = (content, user, parentIds = []) => ({
  id: uuid(),
  content,
  createdAt: 'just now',
  score: 0,
  user: user,
  replies: [],
  parentIds,
});
