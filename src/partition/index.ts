export default function partition<T>(iterable: Iterable<T>, predicator: (element: T) => boolean) {
  const left = [];
  const right = [];

  for (const element of iterable) {
    if (predicator(element)) {
      left.push(element);
    } else {
      right.push(element);
    }
  }

  return [left, right];
}
