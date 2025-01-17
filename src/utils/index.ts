import { encodeError, extractMessage } from 'error-message-utils';
import { IRecordID } from '../shared/types.js';
import { ERRORS } from '../shared/errors.js';

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
 * Returns the value of a property based on a key.
 * @param key
 * @returns any
 */
const getWindowProp = <T>(key: keyof Window): T | undefined => {
  try {
    if (window && typeof window === 'object' && key in window) {
      return window[key] as T;
    }
    return undefined;
  } catch (e) {
    return undefined;
  }
};

/**
 * Attempts to parse JSON data.
 * @param data
 * @returns T
 * @throws
 * - FAILED_TO_PARSE_JSON: if the JSON string is invalid.
 */
const parseJSON = <T>(data: string): T => {
  try {
    return JSON.parse(data);
  } catch (e) {
    throw new Error(encodeError(`Unable to parse the JSON data: ${extractMessage(e)}`, ERRORS.FAILED_TO_PARSE_JSON));
  }
};

/**
 * Attempts to stringify a JSON object.
 * @param data
 * @returns string
 */
const stringifyJSON = <T>(data: T): string => {
  try {
    return JSON.stringify(data);
  } catch (e) {
    throw new Error(encodeError(`Unable to stringify the JSON data: ${extractMessage(e)}`, ERRORS.FAILED_TO_STRINGIFY_JSON));
  }
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  buildDataKey,
  getWindowProp,
  parseJSON,
  stringifyJSON,
};
