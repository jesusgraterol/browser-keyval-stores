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
import { createStore } from 'browser-keyval-stores';

// ...
```

#### `sessionStorage` Store

```typescript
import { createStore } from 'browser-keyval-stores';

// ...
```

#### `indexedDB` Store

```typescript
import { createStore } from 'browser-keyval-stores';

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
