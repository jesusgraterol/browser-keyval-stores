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
  private readonly __data: Record<string, T | undefined> = {};





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
   * @param id
   * @returns T | undefined
   */
  public read(id?: IRecordID): T | undefined {
    return this.__data[buildDataKey(this.id, id)];
  }

  /**
   * Writes data on a record based on its ID. If none was provided, it writes at the root of the
   * store. Moreover, write(someID, undefined) is equivalent to having a delete method.
   * @param id
   * @param data
   */
  public write(id?: IRecordID, data: T | undefined = undefined): void {
    this.__data[buildDataKey(this.id, id)] = data;
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
