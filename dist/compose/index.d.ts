export default function compose<T, U>(f: (arg: T) => U, g: (...args: any[]) => T): (...args: any[]) => U;
