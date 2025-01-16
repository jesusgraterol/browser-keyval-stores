

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Store Mechanism
 * The supported browser storage mechanisms.
 */
type IStoreMechanism = 'tempMemory' | 'localStorage' | 'sessionStorage' | 'indexedDB';

/**
 * Record ID
 * The identifier used to manage records. The store behaves differently based on the type:
 * - undefined: the data will be stored at the root of the store
 * - string | number: the value will be coerced into a string and can be used to locate the data
 */
type IRecordID = undefined | string | number;

/**
 * JSON Data
 * Utility type to list the values supported by the WebStorageStore.
 */
type IJSONData = Record<string, any> | Array<any>;





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IStoreMechanism,
  IRecordID,
  IJSONData,
};
