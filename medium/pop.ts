export type Pop<T extends unknown[]> = T extends [...elms: infer L, unknown] ? L : [];
