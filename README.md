# @cowtech/eslint-config

[![Package Version](https://img.shields.io/npm/v/@cowtech/eslint-config.svg)](https://npm.im/@cowtech/eslint-config)
[![Dependency Status](https://img.shields.io/david/cowtech/eslint-config)](https://david-dm.org/cowtech/eslint-config)

CowTech style ESLint config

https://sw.cowtech.it/eslint-config

Starting from version **4.19.0**, it is now based on [standard](https://standardjs.com/) which will differ on only few specific cases.

## Usage

In your ESLint configuration file, insert the following statement:

```javascript
// ...
"extends": "./node_modules/@cowtech/eslint-config"
// ...
```

Other than the default one, here's the possible alternatives:

- **react**: `./node_modules/@cowtech/eslint-config/react`

  Differs from standard by enforcing **double** quotes in JSX attributes.

## Contributing to @cowtech/eslint-config

- Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
- Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
- Fork the project.
- Start a feature/bugfix branch.
- Commit and push until you are happy with your contribution.
- Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.

## Copyright

Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.

Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
