# Typed mz
[![Build Status](https://travis-ci.org/types/npm-mz.svg?branch=master)](https://travis-ci.org/types/npm-mz)

Typescript Typings for [mz](https://www.npmjs.com/package/mz).

## Installation
```sh
typings install --save mz
```

## Usage

```ts
import * as fs from 'mz/fs';

async function doSomething() {
    if (await fs.exists(__filename)) {
        // whatever
    }
}
```

[More examples](./test)


## Contributing
You can run them the tests with `npm run build` and `npm run test`.

--------------------------------

_Based on typings by [](https://github.com/)_
