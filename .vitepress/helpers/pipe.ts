/**
 * Composes a series of functions to be applied sequentially to an initial value.
 * Each function receives the result of the previous one and passes its result to the next.
 *
 * @template T - The type of the value being processed by the functions.
 * @param {...Array<((value: T) => T)>} funcs - The functions to be applied in sequence.
 * @returns {(value: T) => T} - A function that takes an initial value and returns the result of applying all the composed functions.
 *
 * @example
 * const double = (x: number) => x * 2;
 * const increment = (x: number) => x + 1;
 * const doubleThenIncrement = pipe(double, increment);
 * doubleThenIncrement(3); // returns 7
 *
 * @example
 * const toUpperCase = (str: string) => str.toUpperCase();
 * const exclaim = (str: string) => str + '!';
 * const shout = pipe(toUpperCase, exclaim);
 * shout('hello'); // returns 'HELLO!'
 */
export function pipe<T>(...funcs: ((value: T) => T)[]): (value: T) => T {
  return (value: T) => funcs.reduce((acc, func) => func(acc), value);
}
