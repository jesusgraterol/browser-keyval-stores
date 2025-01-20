import { ILocalStorageStore, ISessionStorageStore } from './web-storage/types.js';
import { LocalStorageStore } from './web-storage/local-storage.js';
import { SessionStorageStore } from './web-storage/session-storage.js';
import { IndexedDBStore, type IIndexedDBStore } from './indexed-db/index.js';

/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type ILocalStorageStore,
  type ISessionStorageStore,
  type IIndexedDBStore,

  // stores
  LocalStorageStore,
  SessionStorageStore,
  IndexedDBStore,
};
