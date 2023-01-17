[![Buy me a coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-orange?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/RwIpTEd) 
[![Ko-fi](https://img.shields.io/badge/Donate-Ko--fi-blue?logo=ko-fi)](https://ko-fi.com/fatihturker)

# `Global Store Manager`
This package helps you to store any object like state, prop etc. so that you can simply assign it from one component and 
use it on another component.

## Package Installation
```sh
npm install global-store-manager
```

## Package Usage
* Create store.ts on your project
  ```sh
  import { GlobalStoreManager } from 'global-store-manager';
  export const globalStoreManager = new GlobalStoreManager();
  ```

* Attach your global object, state, prop anything on some component, you can also update the store with reattaching the object
  ```sh
  globalStoreManager.attachGlobalObject(this, "userDialog");
  ```

* And you can call that object you attached with using the name you assigned on any component
  ```sh
  const {userDialog} = globalStoreManager.getGlobalStore();
  userDialog.openDialog(user, action);
  ```

* You can clean the global store
  ```sh
  globalStoreManager.cleanGlobalStore();
  ```

## Tech Stack

* [Node.js]
* [Typescript]

# `Authors`
 * **Fatih Türker**
# `Sponsors`
No sponsors yet! **Will you be the first?**

# `Contributors`
No contributers yet! **Will you be the first?**

# License
----

MIT

[Typescript]: <https://www.typescriptlang.org>
[Node.js]: <http://nodejs.org>
