import { describe, beforeEach, test, expect, vi } from 'vitest';
import { WebStorageStore } from './web-storage.js';
import { buildDataKey, stringifyJSON } from '../../utils/index.js';
import { STORAGE_TEST_DATA } from '../../shared/constants.js';

/* ************************************************************************************************
 *                                             MOCKS                                              *
 ************************************************************************************************ */

// mocked storage instances
const STORAGE = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
} as unknown as Storage;





/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('WebStorageStore', () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  test('it can interact with the Browser Storage API when compatible', () => {
    vi.stubGlobal('window', { localStorage: STORAGE });
    const storeID = 'unit-test';
    const recordID = undefined;
    const updateData = { hello: 'World!' };
    const store = new WebStorageStore(storeID, 'localStorage');
    expect(STORAGE.getItem).not.toHaveBeenCalled();
    expect(window.localStorage.getItem).not.toHaveBeenCalled();
    expect(store.id).toBe(storeID);
    expect(store.get(recordID)).toBeUndefined();
    expect(STORAGE.getItem).toHaveBeenNthCalledWith(1, buildDataKey(storeID, recordID));
    expect(window.localStorage.getItem).toHaveBeenNthCalledWith(1, buildDataKey(storeID, recordID));
    store.set(recordID, updateData);

    // this is the second time setItem is called as it is used to check compatibility
    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(
      2,
      buildDataKey(storeID, recordID),
      stringifyJSON(updateData),
    );

    // this is the second time removeItem is called as it is used to check compatibility
    store.del();
    expect(STORAGE.removeItem).toHaveBeenNthCalledWith(2, buildDataKey(storeID, recordID));
    expect(window.localStorage.removeItem).toHaveBeenNthCalledWith(
      2,
      buildDataKey(storeID, recordID),
    );
  });

  test('it falls back to the TempMemoryStore if the Storage key is not in the window', () => {
    const storeID = 'unit-test';
    const recordID = undefined;
    const updateData = { hello: 'World!' };
    const store = new WebStorageStore(storeID, 'localStorage');
    expect(store.get(recordID)).toBeUndefined();
    expect(STORAGE.getItem).not.toHaveBeenCalled();

    store.set(recordID, updateData);
    expect(STORAGE.setItem).not.toHaveBeenCalled();

    store.del();
    expect(STORAGE.removeItem).not.toHaveBeenCalled();
  });

  test('it falls back to the TempMemoryStore if the Storage object throws when invoking its methods', () => {
    vi.stubGlobal('window', {
      localStorage: {
        getItem: vi.fn(),
        setItem: vi.fn().mockImplementation(() => { throw new Error('The storage is not supported!'); }),
        removeItem: vi.fn().mockImplementation(() => { throw new Error('The storage is not supported!'); }),
      } as unknown as Storage,
    });
    const storeID = 'unit-test';
    const recordID = undefined;
    const updateData = { hello: 'World!' };
    const store = new WebStorageStore(storeID, 'localStorage');
    expect(store.get(recordID)).toBeUndefined();
    expect(window.localStorage.getItem).not.toHaveBeenCalled();

    // the test compatibility function should have called the setItem method
    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(
      1,
      buildDataKey(STORAGE_TEST_DATA.key, undefined),
      STORAGE_TEST_DATA.value,
    );

    // it shouldn't be called again as it falls back to the TempMemoryStore
    store.set(recordID, updateData);
    expect(window.localStorage.setItem).toHaveBeenCalledOnce();

    store.del();
    expect(window.localStorage.removeItem).not.toHaveBeenCalled();
  });

  test('can determine if the mechanism is compatible', () => {
    vi.stubGlobal('window', { });
    const store = new WebStorageStore('unit-test', 'localStorage');
    expect(store.isCompatible()).toBe(false);

    vi.stubGlobal('window', { localStorage: STORAGE });
    const store2 = new WebStorageStore('unit-test', 'localStorage');
    expect(store2.isCompatible()).toBe(true);
  });
});
