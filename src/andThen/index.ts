export default function andThen<T, U>(
  f: (...args: any[]) => T,
  g: (arg: T) => U
) {
  return (...args: any[]) => {
    return g(f(...args));
  };
}
