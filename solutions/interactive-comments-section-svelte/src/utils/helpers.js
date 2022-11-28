import { v4 as uuid } from 'uuid';
import { quintOut } from 'svelte/easing';

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

export const getCustomTransition = (node, params) => {
  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;

  return {
    duration: 600,
    easing: quintOut,
    css: (t) => `
      transform: ${transform} scale(${t});
      opacity: ${t}
    `,
  };
};
