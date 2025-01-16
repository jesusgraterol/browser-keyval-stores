import { IRecordID } from '../../shared/types.js';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Web Storage Store
 * Object in charge of interacting with the Browser's Storage API. This API is used by
 * Window.sessionStorage & Window.sessionStorage.
 * https://developer.mozilla.org/en-US/docs/Web/API/Storage#instance_properties
 */
interface IWebStorageStore<T> {
  // properties
  id: string;
  isCompatible: boolean;

  // methods
  get: (id?: IRecordID) => T | undefined;
  set: (id: IRecordID, data: T) => void;
  del: (id?: IRecordID) => void;
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IWebStorageStore,
};
