export type NonEmptyArray<T> = [T, ...T[]]

/** Catalog collection discriminator, supplied by the corresponding builder. */
export type Collection = 'skill' | 'skillGroup' | 'skillDomain';
