import { describe, test, expect } from 'vitest';
import { buildDataKey } from './index.js';


/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('buildDataKey', () => {
  test.each([
    ['testStoreID', '16ceb975-4989-4c86-8b63-99294e86a13d', 'testStoreID_16ceb975-4989-4c86-8b63-99294e86a13d'],
    ['testStoreID', 655643215461, 'testStoreID_655643215461'],
    ['testStoreID', undefined, 'testStoreID'],
  ])('buildDataKey(%s, %s) -> %s', (storeID, recordID, expected) => {
    expect(buildDataKey(storeID, recordID)).toBe(expected);
  });
});
