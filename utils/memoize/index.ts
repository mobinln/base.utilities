export default function memoize<FT, FR>(func: (v: FT) => FR) {
  const cache: { [key: string]: FR } = {};

  return function (args: FT) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func(args);
    cache[key] = result;

    return result;
  };
}
