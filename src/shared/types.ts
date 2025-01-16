

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





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IRecordID,
};
