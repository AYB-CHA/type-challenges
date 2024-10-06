export type Awaited<T extends PromiseLike<unknown>> = T extends PromiseLike<infer U> ? U extends PromiseLike<infer O> ? Awaited<PromiseLike<O>> : U : never;
