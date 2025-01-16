import { ILocalStorageStore } from './types.js';
import { WebStorageStore } from './web-storage.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Local Storage Store
 * The store that makes use of Window.localStorage.
 */
class LocalStorageStore<T> extends WebStorageStore<T> implements ILocalStorageStore<T> {
  constructor(id: string) {
    super(id, 'localStorage');
  }
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  LocalStorageStore,
};
