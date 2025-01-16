

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
type IError = 'INVALID_JSON_DATA' | 'FAILED_TO_STRINGIFY_JSON' | 'FAILED_TO_PARSE_JSON';
const ERRORS: { [key in IError]: IError } = {
  INVALID_JSON_DATA: 'INVALID_JSON_DATA',
  FAILED_TO_STRINGIFY_JSON: 'FAILED_TO_STRINGIFY_JSON',
  FAILED_TO_PARSE_JSON: 'FAILED_TO_PARSE_JSON',
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  ERRORS,
};
