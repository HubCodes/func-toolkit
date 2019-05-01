export default function foldLeft<T>(iterable: Iterable<T>, accmulator: T): (predicator: (accmulator: T, element: T) => T) => T;
