export default function foldLeft<T>(iterable: Iterable<T>, accmulator: T) {
  return function processor(predicator: (accmulator: T, element: T) => T) {
    for (const element of iterable) {
      accmulator = predicator(accmulator, element);
    }

    return accmulator;
  };
}
