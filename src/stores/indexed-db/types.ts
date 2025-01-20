import { IRecordID } from '../../shared/types.js';

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
