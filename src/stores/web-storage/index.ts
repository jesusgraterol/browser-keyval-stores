import { IRecordID } from '../../shared/types.js';
import { ITempMemoryStore } from '../temp-memory/index.js';
import { IWebStorageStore } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Web Storage Store
 * Object in charge of interacting with the Browser's Storage API. This API is used by
 * Window.sessionStorage & Window.sessionStorage.
 * https://developer.mozilla.org/en-US/docs/Web/API/Storage#instance_properties
 */
class WebStorageStore<T> implements IWebStorageStore<T> {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // the identifier of the store instance
  public readonly id;

  // true if the browser supports the storage mechanism
  public readonly isCompatible: boolean = true;

  // the instance of the TempMemoryStore used in case isCompatible is false
  private readonly __tempMemory: ITempMemoryStore<T>;





  /* **********************************************************************************************
   *                                         CONSTRUCTOR                                          *
   ********************************************************************************************** */
  constructor(id: string, mechanism: 'localStorage' | 'sessionStorage') {
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
    return undefined;
  }

  /**
   * Writes data on a record based on its ID. If none is provided, it writes at the root of the
   * store.
   * @param id
   * @param data
   */
  public set(id: IRecordID, data: T): void {
    
  }

  /**
   * Deletes the record based on its ID. If none is provided, it deletes the root of the store.
   * @param id?
   */
  public del(id?: IRecordID): void {
    
  }
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type IWebStorageStore,

  // service
  WebStorageStore,
};
