import { STORAGE_TEST_DATA } from '../../shared/constants.js';
import { IRecordID } from '../../shared/types.js';
import {
  getWindowProp,
  buildDataKey,
  parseJSON,
  stringifyJSON,
} from '../../utils/index.js';
import { validateJSONData } from '../../validations/index.js';
import { ITempMemoryStore, TempMemoryStore } from '../temp-memory/index.js';
import { IWebStorageStore } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Web Storage Store
 * Object in charge of interacting with the Browser's Storage API. This API is used by
 * Window.localStorage & Window.sessionStorage.
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
 * https://developer.mozilla.org/en-US/docs/Web/API/Storage
 */
class WebStorageStore<T> implements IWebStorageStore<T> {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // the identifier of the store instance
  public readonly id;

  // the mechanism that will be used to store data on the browser
  private readonly __mechanism: 'localStorage' | 'sessionStorage';

  // true if the browser supports the storage mechanism
  private __isCompatible: boolean | undefined;

  // the Web Storage Instance extracted from the window object
  private __webStorage: Storage | undefined;

  // the instance of the TempMemoryStore used in case isCompatible is false
  private readonly __tempMemory: ITempMemoryStore<T>;





  /* **********************************************************************************************
   *                                         CONSTRUCTOR                                          *
   ********************************************************************************************** */
  constructor(id: string, mechanism: 'localStorage' | 'sessionStorage') {
    this.id = id;
    this.__mechanism = mechanism;
    this.__tempMemory = new TempMemoryStore(this.id);
  }





  /* **********************************************************************************************
   *                                           METHODS                                            *
   ********************************************************************************************** */

  /**
   * Checks if the storage mechanism is supported by the browser. If so, it sets the __isCompatible
   * prop to true.
   */
  private __checkCompatibility = (): void => {
    if (this.__isCompatible === undefined) {
      try {
        this.__webStorage = getWindowProp(this.__mechanism);
        if (this.__webStorage) {
          this.__webStorage.setItem(STORAGE_TEST_DATA.key, STORAGE_TEST_DATA.value);
          this.__webStorage.removeItem(STORAGE_TEST_DATA.key);
          this.__isCompatible = true;
        } else {
          this.__isCompatible = false;
        }
      } catch (e) {
        this.__isCompatible = false;
      }
    }
  };

  /**
   * Retrieves a record by ID. If none, retrieves the data stored at the root of the store.
   * @param id?
   * @returns T | undefined
   */
  public get(id?: IRecordID): T | undefined {
    this.__checkCompatibility();
    if (this.__isCompatible) {
      const data = this.__webStorage!.getItem(buildDataKey(this.id, id));
      if (data) {
        return parseJSON(data) as T;
      }
      return undefined;
    }
    return this.__tempMemory.get(id);
  }

  /**
   * Writes data on a record based on its ID. If none is provided, it writes at the root of the
   * store.
   * @param id
   * @param data
   */
  public set(id: IRecordID, data: T): void {
    this.__checkCompatibility();
    if (this.__isCompatible) {
      validateJSONData(data);
      this.__webStorage!.setItem(buildDataKey(this.id, id), stringifyJSON(data));
    } else {
      this.__tempMemory.set(id, data);
    }
  }

  /**
   * Deletes the record based on its ID. If none is provided, it deletes the root of the store.
   * @param id?
   */
  public del(id?: IRecordID): void {
    this.__checkCompatibility();
    if (this.__isCompatible) {
      this.__webStorage!.removeItem(buildDataKey(this.id, id));
    } else {
      this.__tempMemory.del(id);
    }
  }
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  WebStorageStore,
};
