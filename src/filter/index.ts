export default function filter<T>(
  iterable: Iterable<T>,
  predicator: (element: T) => boolean
) {
  const base = [];

  for (const element of iterable) {
    if (predicator(element)) {
      base.push(element);
    }
  }

  return base;
}
