import { IRecordID } from '../shared/types.js';

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



/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  buildDataKey,
};
