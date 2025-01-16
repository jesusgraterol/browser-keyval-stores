import { encodeError, extractMessage } from 'error-message-utils';
import { IRecordID, IStoreMechanism } from '../shared/types.js';
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
const getWindowProp = (key: keyof Window): any => {
  try {
    return window[key];
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
  isMechanismCompatible,
  getWindowProp,
  parseJSON,
  stringifyJSON,
};
