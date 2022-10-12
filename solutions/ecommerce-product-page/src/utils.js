let dollarUSLocale = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatPrice = (price) => dollarUSLocale.format(price);

export const removeCartItemByName = (cart, name) => objectDelete(cart, name);

export const addItemToCart = (cart, product, qty) => {
  let item = objectSet(
    product,
    'qty',
    cart[product.name] ? cart[product.name].qty + qty : qty
  );

  item = objectSet(item, 'total', item.qty * item.price);

  return objectSet(cart, product.name, item);
};

export const objectDelete = (object, field) => {
  const copy = Object.assign({}, object);
  delete copy[field];
  return copy;
};

export const objectSet = (object, field, value) => {
  const copy = Object.assign({}, object);
  copy[field] = value;
  return copy;
};
