# import-all [![CircleCI](https://circleci.com/gh/solon/import-all.svg?style=shield)](https://circleci.com/gh/solon/import-all)

Given the path to a directory containing JavaScript files, returns an object containing
all of their default and named exports with the module names as keys.

## Installation

```shell
$ npm install --save @briansolon/import-all
```

## Usage

```javascript

import importAll from 'import-all'
const imports = importAll(`${__dirname}/directory`)
```

## Credits

Uses code from [charlieschwabacher/import-all](https://github.com/charlieschwabacher/import-all) and [sindresorhus/import-modules](https://github.com/sindresorhus/import-modules).
