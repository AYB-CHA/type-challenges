export type Readonly<T extends object> = { readonly [key in keyof T]: T[key] }
