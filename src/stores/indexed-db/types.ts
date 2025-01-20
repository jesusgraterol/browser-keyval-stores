

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Indexed DB Store
 * Object in charge of charge of interacting with the Browser's Indexed DB implementation.
 */
interface IIndexedDBStore<T> {
  // properties
  id: string;

  // methods
  get: () => Promise<T | undefined>;
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IIndexedDBStore,
};
