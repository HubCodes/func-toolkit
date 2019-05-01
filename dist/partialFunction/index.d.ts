/**
 * @deprecated since version 1.1.1
 */
export default function partialFunction<T>(domainChecker: (...args: any[]) => boolean, callable: (...args: any[]) => T): (...args: any[]) => T;
