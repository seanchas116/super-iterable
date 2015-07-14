import SuperIterable from "./SuperIterable";

type ReturnIterator<T> = () => Iterator<T>;

export default
function wrap<T>(xs: Iterable<T> | ReturnIterator<T>) {
  if (xs instanceof Function) {
    return new SuperIterable({
      [Symbol.iterator]: xs
    });
  }
  return new SuperIterable(<Iterable<T>>xs);
}
