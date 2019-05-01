export default function map<T, U>(iterable: Iterable<T>, predicator: (element: T) => U) {
  const base: U[] = [];
  for (const element of iterable) {
    base.push(predicator(element));
  }

  return base;
}
