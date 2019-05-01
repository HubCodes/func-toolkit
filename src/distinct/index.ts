export default function distinct<T>(iterable: Iterable<T>) {
  const set = new Set(iterable);
  return Array.from(set);
}
