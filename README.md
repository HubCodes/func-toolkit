[![Build Status](https://travis-ci.org/HubCodes/func-toolkit.svg?branch=master)](https://travis-ci.org/HubCodes/func-toolkit)
[![Coverage Status](https://coveralls.io/repos/github/HubCodes/func-toolkit/badge.svg)](https://coveralls.io/github/HubCodes/func-toolkit)

[![NPM](https://nodei.co/npm/func-toolkit.png)](https://nodei.co/npm/func-toolkit/)

func-toolkit
===
The func-toolkit includes several useful function combinator and utilities. The compinator provided by the func-toolkit can use any iterable object. func-toolkit provides all of these without any dependencies.

## How to use

### Example: compose
``` js
const $ = require('func-toolkit');

function f(x) {
  return 2 * x;
}

function g(x) {
  return x + 2;
}

const gf = $.compose(f, g);
gf(4);  // 12

```

### Example: partialFunction

``` js
const arg1 = 1;
const arg2 = 'a';
const func = $.partialFunction((arg1, arg2) => {
  return typeof arg1 == 'number' && typeof arg2 == 'string';
}, (arg1, arg2) => {
  return arg1;
});
const result = func(arg1, arg2); // 1

const func2 = $.partialFunction((arg1) => arg1 > 0, (arg) => arg);
func2.isDefinedAt(10); // true
```
