

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Record ID
 * The identifier used to manage records. The store behaves differently based on the type:
 * - undefined: the data will be stored at the root of the store
 * - string | number: the value will be coerced into a string and can be used to locate the data
 */
type IRecordID = undefined | string | number;

/**
 * Store ID
 * The idenfiers for each supported store mechanism.
 */
type IStoreID = 'tempMemory' | 'localStorage' | 'sessionStorage' | 'indexedDB';





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IRecordID,
  IStoreID,
};
