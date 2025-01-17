import type { IStoreMechanism, IRecordID } from './shared/types.js';
import {
  type ILocalStorageStore,
  LocalStorageStore,
  type ISessionStorageStore,
  SessionStorageStore,
} from './stores/index.js';

/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // shared
  type IStoreMechanism,
  type IRecordID,

  // stores
  type ILocalStorageStore,
  LocalStorageStore,
  type ISessionStorageStore,
  SessionStorageStore,
};
