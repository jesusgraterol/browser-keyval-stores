import { IRecordID } from '../../shared/types.js';
import { buildDataKey } from '../../utils/index.js';
import { ITempMemoryStore } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Temp Memory Store
 * Object in charge of storing and managing records in a local property.
 */
class TempMemoryStore<T> implements ITempMemoryStore<T> {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // the identifier of the store instance
  public readonly id;

  // this is the fallback store mechanism, it is supported by all browsers
  public readonly isCompatible: boolean = true;

  // the object holding the records
  private readonly __data: Record<string, T> = {};





  /* **********************************************************************************************
   *                                         CONSTRUCTOR                                          *
   ********************************************************************************************** */
  constructor(id: string) {
    this.id = id;
  }





  /* **********************************************************************************************
   *                                           METHODS                                            *
   ********************************************************************************************** */

  /**
   * Retrieves a record by ID. If none, retrieves the data stored at the root of the store.
   * @param id?
   * @returns T | undefined
   */
  public get(id?: IRecordID): T | undefined {
    return this.__data[buildDataKey(this.id, id)];
  }

  /**
   * Writes data on a record based on its ID. If none is provided, it writes at the root of the
   * store.
   * @param id
   * @param data
   */
  public set(id: IRecordID, data: T): void {
    this.__data[buildDataKey(this.id, id)] = data;
  }

  /**
   * Deletes the record based on its ID. If none is provided, it deletes the root of the store.
   * @param id?
   */
  public del(id?: IRecordID): void {
    delete this.__data[buildDataKey(this.id, id)];
  }
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type ITempMemoryStore,

  // service
  TempMemoryStore,
};
