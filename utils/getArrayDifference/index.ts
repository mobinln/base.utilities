/**
 *
 * @param A input array A with type TA[]
 * @param B input array B with type TB[]
 * @param getKey a function to get key to check if item is in A or not
 * @returns equivalent of A - B in set theory
 */
export default function getArrayDifference<TA, TB>(A: TA[], B: TB[], getKey: (item: TA | TB) => string): TA[] {
  const mapB: any = B.reduce((p, c) => ({ ...p, [getKey(c)]: getKey(c) }), {});
  const result = A.filter((itemA) => !Boolean(mapB[getKey(itemA)]));
  return result;
}
