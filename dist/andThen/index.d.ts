export default function andThen<T, U>(f: (...args: any[]) => T, g: (arg: T) => U): (...args: any[]) => U;
