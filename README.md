# import-all [![CircleCI](https://circleci.com/gh/solon/import-all.svg?style=shield)](https://circleci.com/gh/solon/import-all)

Given the path to a directory containing JavaScript files, returns an array of
all of their default exports.

## Installation

```shell
$ npm install --save @briansolon/import-all
```

## Usage

```javascript
import importAll from 'import-all';
const imports = importAll(`${__dirname}/directory`);
```

Alternatively, by passing an optional `asObject = true` parameter, it returns
an object with module names as keys.

```javascript
import importAll from 'import-all';
const imports = importAll(`${__dirname}/directory`, true);
```

## Related

- [charlieschwabacher/import-all](https://github.com/charlieschwabacher/import-all)
- [sindresorhus/import-modules](https://github.com/sindresorhus/import-modules)