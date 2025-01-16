import { ILocalStorageStore, ISessionStorageStore } from './types.js';
import { LocalStorageStore } from './local-storage.js';
import { SessionStorageStore } from './session-storage.js';

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
