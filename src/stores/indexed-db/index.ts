import { STORAGE_TEST_DATA } from '../../shared/constants.js';
import { IRecordID } from '../../shared/types.js';
import { getWindowProp, buildDataKey } from '../../utils/index.js';
import { ITempMemoryStore, TempMemoryStore } from '../temp-memory/index.js';
import { IIndexedDBStore } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Indexed DB Store
 * Object in charge of charge of interacting with the Browser's IndexedDB implementation.
 */
class IndexedDBStore<T> implements IIndexedDBStore<T> {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // ...
  public readonly id;





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
   * Checks if the storage mechanism is supported by the browser. If so, it sets the __isCompatible
   * prop to true.
   */
  private async __checkCompatibility(): Promise<void> { 

  }

  /**
   * Runs the tests to check if the storage mechanism is supported by the browser and returns true
   * if it is.
   * @returns Promise<boolean>
   */
  public async isCompatible(): Promise<boolean> {

  }

  /**
   * Retrieves a record by ID. If no ID is provided, it retrieves the data stored at the root of the
   * store.
   * @param id?
   * @returns Promise<T | undefined>
   */
  public async get(id?: IRecordID): Promise<T | undefined> {

  }

  /**
   * Writes data on a record based on its ID. If no ID is provided, it writes at the root of the
   * store.
   * @param id
   * @param data
   * @returns Promise<void>
   */
  public async set(id: IRecordID, data: T): Promise<void> {

  }

  /**
   * Deletes the record based on its ID. If no ID is provided, it deletes the root of the store.
   * @param id?
   * @returns Promise<void>
   */
    public async del(id?: IRecordID): Promise<void> {

    }
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type IIndexedDBStore,

  // service
  IndexedDBStore,
};
