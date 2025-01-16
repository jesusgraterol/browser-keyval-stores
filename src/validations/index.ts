import { encodeError } from 'error-message-utils';
import { ERRORS } from '../shared/errors.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Ensures format of the data complies with the JSON specs and can be serialized.
 * @param data
 */
const validateJSONData = (data: Record<string, any> | Array<any>): void => {
  if (!data || typeof data !== 'object') {
    throw new Error(encodeError('The data must be an object or an array. It must also be JSON Serializable.', ERRORS.INVALID_JSON_DATA));
  }
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  validateJSONData,
};
