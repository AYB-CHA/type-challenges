export type Last<T extends unknown[]> = T extends [...elms: unknown[], infer N] ? N : never
