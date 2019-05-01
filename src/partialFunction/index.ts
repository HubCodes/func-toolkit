/**
 * @deprecated since version 1.1.1
 */
export default function partialFunction<T>(
  domainChecker: (...args: any[]) => boolean,
  callable: (...args: any[]) => T
) {
  let wrapper = function wrapper(...args: any[]) {
    const canCall = domainChecker(...args);
    if (canCall) {
      return callable(...args);
    } else {
      throw new Error(`argument domain error`);
    }
  };

  // @ts-ignore
  wrapper.isDefinedAt = function isDefinedAt(...args: any[]) {
    return domainChecker(...args);
  };

  return wrapper;
}
