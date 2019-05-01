export default function any<T>(
  iterable: Iterable<T>,
  predicator: (element: T) => T
) {
  for (const element of iterable) {
    if (predicator(element)) {
      return true;
    }
  }
  return false;
}
