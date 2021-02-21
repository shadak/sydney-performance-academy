export type UnaryFunction<T, U> = (v: T) => U
export const bind = <T, U>(f: UnaryFunction<any, any>): UnaryFunction<T, U> => f