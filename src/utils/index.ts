import { IRecordID, IStoreMechanism } from '../shared/types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Builds the key that will be used to locate a record
 * @param storeID
 * @param recordID
 * @returns string
 */
const buildDataKey = (storeID: string, recordID: IRecordID): string => {
  if (recordID === undefined) {
    return storeID;
  }
  return `${storeID}_${recordID}`;
};

/**
 * Checks if a storage mechanism is present in the window object.
 * @param name
 * @returns boolean
 */
const isMechanismCompatible = (name: IStoreMechanism): boolean => {
  try {
    return Boolean(window) && typeof window === 'object' && name in window;
  } catch (e) {
    return false;
  }
};

/**
 * Returns the value of a property based on a key.
 * @param key
 * @returns any
 */
const getWindowProp = (key: keyof Window): any => window[key];





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  buildDataKey,
  isMechanismCompatible,
  getWindowProp,
};
