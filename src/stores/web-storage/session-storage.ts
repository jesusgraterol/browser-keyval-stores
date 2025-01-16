import { ISessionStorageStore } from './types.js';
import { WebStorageStore } from './web-storage.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Local Storage Store
 * The store that makes use of Window.sessionStorage.
 */
class SessionStorageStore<T> extends WebStorageStore<T> implements ISessionStorageStore<T> {
  constructor(id: string) {
    super(id, 'sessionStorage');
  }
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  SessionStorageStore,
};
