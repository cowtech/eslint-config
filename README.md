# @cowtech/eslint-config

[![Version](https://img.shields.io/npm/v/@cowtech/eslint-config.svg)](https://npm.im/@cowtech/eslint-config)
[![Dependencies](https://img.shields.io/librariesio/release/npm/@cowtech/eslint-config)](https://libraries.io/npm/@cowtech%2Feslint-config)

CowTech ESLint configuration

https://sw.cowtech.it/eslint-config

Starting from version \*_10.0.0_, it is now based on [neostandard](https://github.com/neostandard/neostandard) with few modifications.

Between version **4.19.0\* and **9.x\*\*, it was based on [standard](https://standardjs.com/) with few modifications.

## Usage

In your ESLint configuration file, insert the following code:

```javascript
import { cowtech } from '@cowtech/eslint-config'

export default [
  // ...
  ...cowtech
  // ...
]
```

### ESLint 10 and TypeScript 7

The preset includes `@eslint/compat` for legacy plugins running on ESLint 10.
Consumers do not need to wrap it with `fixupConfigRules`.

TypeScript-aware linting still requires the TypeScript 6 JavaScript API, supplied
by this package through the `typescript` alias. In projects compiled with TypeScript 7,
keep the native compiler and the lint-compatible API installed separately:

```json
{
  "devDependencies": {
    "@typescript/native": "npm:typescript@^7.0.2",
    "typescript": "npm:@typescript/typescript6@^6.0.2"
  }
}
```

Builds use `tsc` from `@typescript/native`; ESLint tooling imports `typescript`.

## Contributing to @cowtech/eslint-config

- Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
- Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
- Fork the project.
- Start a feature/bugfix branch.
- Commit and push until you are happy with your contribution.
- Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.

## Copyright

Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.

Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/isc.
