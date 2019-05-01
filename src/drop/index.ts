export default function drop<T>(iterable: Iterable<T>, count: number) {
  const dropped = [];
  let dropping = 0;

  for (const element of iterable) {
    if (dropping >= count) {
      dropped.push(element);
    }

    dropping++;
  }

  return dropped;
}
