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
const isMechanismCompatible = (name: IStoreMechanism): boolean => window && name in window;





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  buildDataKey,
  isMechanismCompatible,
};
