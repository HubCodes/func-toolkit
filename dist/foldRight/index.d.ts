export default function foldRight<T>(iterable: Iterable<T>, accmulator: T): (predicator: (element: T, accmulator: T) => T) => T;
