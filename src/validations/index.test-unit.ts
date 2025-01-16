import { describe, test, expect } from 'vitest';
import { validateJSONData } from './index.js';
import { ERRORS } from '../shared/errors.js';

/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('validateJSONData', () => {
  test('can validate JSON values', () => {
    expect(validateJSONData({})).toBeUndefined();
    expect(validateJSONData({ foo: 123 })).toBeUndefined();
    expect(validateJSONData([])).toBeUndefined();
    expect(validateJSONData([123, 456, 789])).toBeUndefined();
  });

  test('can identify invalid data', () => {
    // @ts-ignore
    expect(() => validateJSONData()).toThrowError(ERRORS.INVALID_JSON_DATA);
    // @ts-ignore
    expect(() => validateJSONData(undefined)).toThrowError(ERRORS.INVALID_JSON_DATA);
    // @ts-ignore
    expect(() => validateJSONData(null)).toThrowError(ERRORS.INVALID_JSON_DATA);
    // @ts-ignore
    expect(() => validateJSONData('asdasd')).toThrowError(ERRORS.INVALID_JSON_DATA);
    // @ts-ignore
    expect(() => validateJSONData(123)).toThrowError(ERRORS.INVALID_JSON_DATA);
    // @ts-ignore
    expect(() => validateJSONData(true)).toThrowError(ERRORS.INVALID_JSON_DATA);
  });
});
