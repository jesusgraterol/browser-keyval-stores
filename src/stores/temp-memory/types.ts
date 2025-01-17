import { IRecordID } from '../../shared/types.js';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Temp Memory Record Store
 * Object in charge of storing and managing records in a local property.
 */
interface ITempMemoryStore<T> {
  // properties
  id: string;

  // actions
  get: (id?: IRecordID) => T | undefined;
  set: (id: IRecordID, data: T) => void;
  del(id?: IRecordID): void;
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  ITempMemoryStore,
};
