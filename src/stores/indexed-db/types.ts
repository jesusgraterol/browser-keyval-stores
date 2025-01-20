import { IRecordID } from '../../shared/types.js';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Indexed DB Store
 * Object in charge of charge of interacting with the Browser's IndexedDB implementation.
 */
interface IIndexedDBStore<T> {
  // properties
  id: string;

  // methods
  isCompatible(): Promise<boolean>;
  get: (id?: IRecordID) => Promise<T | undefined>;
  set: (id: IRecordID, data: T) => Promise<void>;
  del: (id?: IRecordID) => Promise<void>;
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IIndexedDBStore,
};
