export const removeCartItemByName = (cart, name) => objectDelete(cart, name);

export const objectDelete = (object, field) => {
  const copy = Object.assign({}, object);
  delete copy[field];
  return copy;
};
