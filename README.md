[![Build Status](https://travis-ci.org/HubCodes/func-toolkit.svg?branch=master)](https://travis-ci.org/HubCodes/func-toolkit)

func-toolkit
===
The func-toolkit includes several useful function combinator and utilities. The compinator provided by the func-toolkit can use any iterable object. 

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
