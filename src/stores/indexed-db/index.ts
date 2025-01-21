import { get, set, del } from 'idb-keyval';
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

  // the identifier of the store instance
  public readonly id;

  // true if the browser supports the storage mechanism
  private __isCompatible: boolean | undefined;

  // the instance of the TempMemoryStore used in case __isCompatible is false
  private readonly __tempMemory: ITempMemoryStore<T>;





  /* **********************************************************************************************
   *                                         CONSTRUCTOR                                          *
   ********************************************************************************************** */
  constructor(id: string) {
    this.id = id;
    this.__tempMemory = new TempMemoryStore(this.id);
  }





  /* **********************************************************************************************
   *                                           METHODS                                            *
   ********************************************************************************************** */

  /**
   * Checks if the storage mechanism is supported by the browser. If so, it sets the __isCompatible
   * prop to true.
   */
  private async __checkCompatibility(): Promise<void> {
    if (this.__isCompatible === undefined) {
      try {
        const db = getWindowProp<IDBFactory | undefined>('indexedDB');
        if (db) {
          await set(STORAGE_TEST_DATA.key, STORAGE_TEST_DATA.value);
          await del(STORAGE_TEST_DATA.key);
          this.__isCompatible = true;
        } else {
          this.__isCompatible = false;
        }
      } catch (e) {
        this.__isCompatible = false;
      }
    }
  }

  /**
   * Runs the tests to check if the storage mechanism is supported by the browser and returns true
   * if it is.
   * @returns Promise<boolean>
   */
  public async isCompatible(): Promise<boolean> {
    await this.__checkCompatibility();
    return this.__isCompatible as boolean;
  }

  /**
   * Retrieves a record by ID. If no ID is provided, it retrieves the data stored at the root of the
   * store.
   * @param id?
   * @returns Promise<T | undefined>
   */
  public async get(id?: IRecordID): Promise<T | undefined> {
    await this.__checkCompatibility();
    if (this.__isCompatible) {
      return get(buildDataKey(this.id, id));
    }
    return this.__tempMemory.get(id);
  }

  /**
   * Writes data on a record based on its ID. If no ID is provided, it writes at the root of the
   * store.
   * @param id
   * @param data
   * @returns Promise<void>
   */
  public async set(id: IRecordID, data: T): Promise<void> {
    await this.__checkCompatibility();
    if (this.__isCompatible) {
      await set(buildDataKey(this.id, id), data);
    } else {
      this.__tempMemory.set(id, data);
    }
  }

  /**
   * Deletes the record based on its ID. If no ID is provided, it deletes the root of the store.
   * @param id?
   * @returns Promise<void>
   */
  public async del(id?: IRecordID): Promise<void> {
    await this.__checkCompatibility();
    if (this.__isCompatible) {
      await del(buildDataKey(this.id, id));
    } else {
      this.__tempMemory.del(id);
    }
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
