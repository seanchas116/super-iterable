import SuperIterable from "./SuperIterable";
export default function wrap(xs) {
    if (xs instanceof Function) {
        return new SuperIterable({
            [Symbol.iterator]: xs
        });
    }
    return new SuperIterable(xs);
}
