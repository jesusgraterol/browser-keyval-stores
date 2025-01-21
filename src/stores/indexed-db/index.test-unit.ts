import { describe, beforeEach, test, expect, vi } from 'vitest';

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

  test.skip('can calculate 2 plus 2', () => {
    expect(2 + 2).toBe(4);
  });
});
