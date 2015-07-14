import SuperIterable from "./SuperIterable";

function *generatorFunc() {}
const GeneratorFunction = generatorFunc.constructor

export default
function wrap<T>(xs: Iterable<T>) {
  // allow GeneratorFunction in JavaScript
  if (xs instanceof GeneratorFunction) {
    const iterable: any = {
      [Symbol.iterator]: xs
    };
    xs = <Iterable<T> >(iterable);
  }
  return new SuperIterable(xs);
}
