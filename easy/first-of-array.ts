export type First<T extends any[]> = T extends[infer FT, ...any[]] ? FT : never
