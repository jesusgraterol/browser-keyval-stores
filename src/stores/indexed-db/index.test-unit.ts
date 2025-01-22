import { describe, beforeEach, test, expect, vi } from 'vitest';
import { get, set, del } from 'idb-keyval';
import { STORAGE_TEST_DATA } from '../../shared/constants.js';
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

// mocks the set function to throw an error
const mockSet = () => {
  // @ts-ignore
  set.mockRejectedValue(new Error('Error setting data'));
};



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

  test('it falls back to the TempMemoryStore if the Storage key is not in the window', async () => {
    const storeID = 'unit-test';
    const recordID = undefined;
    const updateData = { hello: 'World!' };
    const store = new IndexedDBStore(storeID);
    await expect(store.get(recordID)).resolves.toBeUndefined();
    expect(get).not.toHaveBeenCalled();

    await store.set(recordID, updateData);
    expect(set).not.toHaveBeenCalled();

    await store.del();
    expect(del).not.toHaveBeenCalled();
  });

  test('it falls back to the TempMemoryStore if the Storage object throws when invoking its methods', async () => {
    vi.stubGlobal('window', { indexedDB: {} });
    const storeID = 'unit-test';
    const recordID = undefined;
    const updateData = { hello: 'World!' };
    const store = new IndexedDBStore(storeID);

    // mock the set function to throw an error so the compatibility test fails
    mockSet();

    await expect(store.get(recordID)).resolves.toBeUndefined();
    expect(get).not.toHaveBeenCalled();

    // the test compatibility function should have called the setItem method
    expect(set).toHaveBeenNthCalledWith(
      1,
      buildDataKey(STORAGE_TEST_DATA.key, undefined),
      STORAGE_TEST_DATA.value,
    );

    // it shouldn't be called again as it falls back to the TempMemoryStore
    await store.set(recordID, updateData);
    expect(set).toHaveBeenCalledOnce();

    await store.del();
    expect(del).not.toHaveBeenCalled();
  });
});
