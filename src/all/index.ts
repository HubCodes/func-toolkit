export default function all<T>(
  iterable: Iterable<T>,
  predicator: (element: T) => boolean
): boolean {
  for (const element of iterable) {
    if (!predicator(element)) {
      return false;
    }
  }

  return true;
}
