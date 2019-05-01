export default function foldRight<T>(iterable: Iterable<T>, accmulator: T) {
  return function processor(predicator: (element: T, accmulator: T) => T) {
    const arr = [];
    for (const element of iterable) {
      arr.push(element);
    }
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      accmulator = predicator(arr[i], accmulator);
    }

    return accmulator;
  };
}
