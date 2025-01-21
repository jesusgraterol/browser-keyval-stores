import { describe, beforeEach, test, expect, vi } from 'vitest';
import { get, set, del } from 'idb-keyval';
import { buildDataKey } from '../../utils/index.js';
import { IndexedDBStore } from './index.js';

/* ************************************************************************************************
 *                                             MOCKS                                              *
 ************************************************************************************************ */

// mocks the entire idb-keyval module
vi.mock('idb-keyval', () => ({
  get: vi.fn(),
  set: vi.fn(),
  del: vi.fn(),
}));




/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('IndexedDBStore', () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  test('it can interact with the Browser IndexedDB API when compatible', async () => {
    vi.stubGlobal('window', { indexedDB: {} });
    const storeID = 'unit-test';
    const recordID = undefined;
    const updateData = { hello: 'World!' };
    const store = new IndexedDBStore(storeID);
    expect(get).not.toHaveBeenCalled();
    expect(store.id).toBe(storeID);
    await expect(store.get(recordID)).resolves.toBeUndefined();
    expect(get).toHaveBeenNthCalledWith(1, buildDataKey(storeID, recordID));

    // this is the second time set is called as it is used to check compatibility
    await store.set(recordID, updateData);
    expect(set).toHaveBeenNthCalledWith(2, buildDataKey(storeID, recordID), updateData);

    // this is the second time del is called as it is used to check compatibility
    await store.del();
    expect(del).toHaveBeenNthCalledWith(2, buildDataKey(storeID, recordID));
  });
});
