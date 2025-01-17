import type { IStoreMechanism, IRecordID } from './shared/types.js';
import {
  type ILocalStorageStore,
  LocalStorageStore,
  type ISessionStorageStore,
  SessionStorageStore,
} from './stores/index.js';

type IUserPreferences = {
  language: string,
  theme: string
};

const store = new LocalStorageStore<IUserPreferences>('userPreferences');

store.get('2d22df80-fc4b-498a-a4a7-734daa71c8dd');
// undefined

store.set('2d22df80-fc4b-498a-a4a7-734daa71c8dd', { language: 'en', theme: 'dark' });
store.get('2d22df80-fc4b-498a-a4a7-734daa71c8dd');
// { language: 'en', theme: 'dark' }

store.set('2d22df80-fc4b-498a-a4a7-734daa71c8dd', { language: 'es', theme: 'light' });
store.get('2d22df80-fc4b-498a-a4a7-734daa71c8dd');
// { language: 'es', theme: 'light' }

store.del('2d22df80-fc4b-498a-a4a7-734daa71c8dd');
store.get('2d22df80-fc4b-498a-a4a7-734daa71c8dd');
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
