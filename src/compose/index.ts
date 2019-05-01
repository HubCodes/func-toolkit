export default function compose<T, U>(
  f: (arg: T) => U,
  g: (...args: any[]) => T
) {
  return (...args: any[]) => {
    return f(g(...args));
  };
}
