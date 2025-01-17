import type { IStoreMechanism, IRecordID } from './shared/types.js';
import {
  type ILocalStorageStore,
  LocalStorageStore,
  type ISessionStorageStore,
  SessionStorageStore,
} from './stores/index.js';

type IApplicationFormData = {
  fullName: string,
  passportNum: string,
};

const store = new SessionStorageStore<IApplicationFormData>('applicationForm');

store.get();
// undefined

store.set(undefined, { fullName: 'Jesus Graterol', passportNum: 'P4366918' });
store.get();
// { fullName: 'Jesus Graterol', passportNum: 'P4366918' }

store.set(undefined, { fullName: 'Jesus Graterol', passportNum: 'LA080402' });
store.get();
// { fullName: 'Jesus Graterol', passportNum: 'LA080402' }

store.del();
store.get();
// undefined


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
