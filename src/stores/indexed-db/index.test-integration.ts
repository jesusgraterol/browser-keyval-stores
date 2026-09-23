// @vitest-environment node
import { indexedDB } from 'fake-indexeddb';
import { afterEach, test, vi, expect } from 'vitest';

import { IndexedDBStore } from './index.js';

afterEach(() => {
  vi.unstubAllGlobals();
});

test('shares persisted records between window and service worker contexts', async () => {
  vi.stubGlobal('indexedDB', indexedDB);
  vi.stubGlobal('window', { indexedDB });

  const pageStore = new IndexedDBStore<{ token: string }>('context-share');
  await expect(pageStore.isCompatible()).resolves.toBe(true);
  await pageStore.set('device', { token: 'first-token' });

  vi.stubGlobal('window', undefined);
  const workerStore = new IndexedDBStore<{ token: string }>('context-share');
  await expect(workerStore.isCompatible()).resolves.toBe(true);
  await expect(workerStore.get('device')).resolves.toStrictEqual({ token: 'first-token' });
  await workerStore.set('device', { token: 'second-token' });

  vi.stubGlobal('window', { indexedDB });
  await expect(
    new IndexedDBStore<{ token: string }>('context-share').get('device'),
  ).resolves.toStrictEqual({
    token: 'second-token',
  });

  await pageStore.del('device');
});
