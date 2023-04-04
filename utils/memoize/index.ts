export default function memoize(func: (v: any) => any) {
  const cache = {};

  return function (...args: any) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func.apply(this, args);
    cache[key] = result;

    return result;
  };
}
