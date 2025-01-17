import { ILocalStorageStore, ISessionStorageStore } from './web-storage/types.js';
import { LocalStorageStore } from './web-storage/local-storage.js';
import { SessionStorageStore } from './web-storage/session-storage.js';


/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type ILocalStorageStore,
  type ISessionStorageStore,

  // stores
  LocalStorageStore,
  SessionStorageStore,
};
