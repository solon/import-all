import-all
----------

Given the path to a directory containing JavaScript files, returns an array of
all of their default exports.

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