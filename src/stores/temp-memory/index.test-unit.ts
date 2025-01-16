import { describe, test, expect } from 'vitest';
import { TempMemoryStore } from './index.js';

/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('TempMemoryStore', () => {
  test('can instantiate a store and manage the root of it', () => {
    const store = new TempMemoryStore('unit_test');
    expect(store.id).toBe('unit_test');
    expect(store.isCompatible).toBe(true);
    expect(store.get()).toBeUndefined();
    store.set(undefined, { foo: 'bar' });
    expect(store.get()).toStrictEqual({ foo: 'bar' });
    store.set(undefined, { foo: 'bar2' });
    expect(store.get()).toStrictEqual({ foo: 'bar2' });
    store.del();
    expect(store.get()).toBeUndefined();
  });

  test('can instantiate a store and manage its data based on record ids', () => {
    const store = new TempMemoryStore('unit_test_2');
    const id = '16ceb975-4989-4c86-8b63-99294e86a13d';
    expect(store.get(id)).toBeUndefined();
    store.set(id, { foo: 'bar' });
    expect(store.get(id)).toStrictEqual({ foo: 'bar' });
    store.set(id, { foo: 'bar2' });
    expect(store.get(id)).toStrictEqual({ foo: 'bar2' });
    store.del(id);
    expect(store.get(id)).toBeUndefined();
  });
});
