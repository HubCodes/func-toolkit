export default function zip<T, U>(firstIterable: Iterable<T>, secondIterable: Iterable<U>) {
  const firstElements: T[] = [];
  const secondElements: U[] = [];
  const combined: [T, U][] = [];

  for (const element of firstIterable) {
    firstElements.push(element);
  }
  for (const element of secondIterable) {
    secondElements.push(element);
  }
  for (let i = 0; i < firstElements.length && i < secondElements.length; i += 1) {
    combined.push([firstElements[i], secondElements[i]]);
  }

  return combined;
}
