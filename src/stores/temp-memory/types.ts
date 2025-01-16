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
  isCompatible: boolean;

  // actions
  read: (id: IRecordID) => T | undefined;
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  ITempMemoryStore,
};
