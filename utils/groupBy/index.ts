type KeyGetter<T> = (item: T) => any;

export default function groupBy<T>(data: T[], getKey: KeyGetter<T>): Map<any, T[]> {
  return data.reduce((result, item) => {
    const key = getKey(item);
    const group = result.get(key) || [];
    group.push(item);
    result.set(key, group);
    return result;
  }, new Map<any, T[]>());
}
