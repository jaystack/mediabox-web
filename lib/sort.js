const fn = f => f?.file?.name;
// eslint-disable-next-line no-nested-ternary
export const sortByFileName = (a, b) => (fn(a) > fn(b) ? 1 : fn(a) < fn(b) ? -1 : 0);
