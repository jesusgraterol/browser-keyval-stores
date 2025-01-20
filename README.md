# Browser KeyVal Stores

The `browser-keyval-stores` package offers a clean and unified API to interact with browser storage mechanisms ([`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), and [`indexedDB`](https://developer.mozilla.org/en-US/docs/Web/API/Window/indexedDB)) from your applications. It streamlines development and eliminates the need for browser-specific code when working with client-side data storage.





</br>

## Getting Started

Install the package:
```bash
npm install -S browser-keyval-stores
```


### Usage

#### `localStorage` Store

```typescript
import { LocalStorageStore } from 'browser-keyval-stores';

type IUserPreferences = {
  language: string,
  theme: string
};

const store = new LocalStorageStore<IUserPreferences>('userPreferences');

const uid = '2d22df80-fc4b-498a-a4a7-734daa71c8dd';

store.get(uid);
// undefined

store.set(uid, { language: 'en', theme: 'dark' });
store.get(uid);
// { language: 'en', theme: 'dark' }

store.set(uid, { language: 'es', theme: 'light' });
store.get(uid);
// { language: 'es', theme: 'light' }

store.del(uid);
store.get(uid);
// undefined
```

#### `sessionStorage` Store

```typescript
import { SessionStorageStore } from 'browser-keyval-stores';

type IApplicationFormData = {
  fullName: string,
  passportNum: string,
};

const store = new SessionStorageStore<IApplicationFormData>('applicationForm');

store.get();
// undefined

store.set(undefined, { fullName: 'Jess Grateol', passportNum: 'P4366918' });
store.get();
// { fullName: 'Jess Grateol', passportNum: 'P4366918' }

store.set(undefined, { fullName: 'Jesus Graterol', passportNum: 'LA080402' });
store.get();
// { fullName: 'Jesus Graterol', passportNum: 'LA080402' }

store.del();
store.get();
// undefined
```

#### `indexedDB` Store

```typescript
import { IndexedDBStore } from 'browser-keyval-stores';

// ...
```



### Types

<details>
  <summary><code>IStoreMechanism</code></summary>

  The supported browser storage mechanisms.
  ```typescript
  type IStoreMechanism = 'tempMemory' | 'localStorage' | 'sessionStorage' | 'indexedDB';
  ```
</details>

<details>
  <summary><code>IRecordID</code></summary>

  The identifier used to manage records. The store behaves differently based on the type:
  - `undefined`: the data will be stored at the root of the store
  - `string` | `number`: the value will be coerced into a string and can be used to locate the data
  ```typescript
  type IRecordID = undefined | string | number;
  ```
</details>

<details>
  <summary><code>IWebStorageStore<T></code></summary>

  Object in charge of interacting with the Browser's Storage API. This API is used by [`Window.localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) & [`Window.sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
  ```typescript
  interface IWebStorageStore<T> {
    // properties
    id: string;

    // methods
    get: (id?: IRecordID) => T | undefined;
    set: (id: IRecordID, data: T) => void;
    del: (id?: IRecordID) => void;
  }

  interface ILocalStorageStore<T> extends IWebStorageStore<T> {
    // ...
  }

  interface ISessionStorageStore<T> extends IWebStorageStore<T> {
    // ...
  }
  ```
</details>

<details>
  <summary><code>IIndexedDBStore<T></code></summary>

  Object in charge of charge of interacting with the Browser's `IndexedDB` implementation.
  ```typescript
  interface IIndexedDBStore<T> {
    // properties
    id: string;

    // methods
    get: (id?: IRecordID) => Promise<T | undefined>;
    set: (id: IRecordID, data: T) => Promise<void>;
    del: (id?: IRecordID) => Promise<void>;
  }
  ```
</details>





<br/>

## Built With

- TypeScript





<br/>

## Running the Tests

```bash
# integration tests
npm run test:integration

# unit tests
npm run test:unit
```





<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)





<br/>

## Deployment

Install dependencies:
```bash
npm install
```


Build the library:
```bash
npm start
```


Publish to `npm`:
```bash
npm publish
```
