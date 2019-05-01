[![Build Status](https://travis-ci.org/HubCodes/func-toolkit.svg?branch=master)](https://travis-ci.org/HubCodes/func-toolkit)
[![Coverage Status](https://coveralls.io/repos/github/HubCodes/func-toolkit/badge.svg)](https://coveralls.io/github/HubCodes/func-toolkit)

[![NPM](https://nodei.co/npm/func-toolkit.png)](https://nodei.co/npm/func-toolkit/)

# func-toolkit

The func-toolkit includes several useful function combinator and utilities. The compinator provided by the func-toolkit can use any iterable object. func-toolkit provides all of these without any dependencies.

## How to use

Most examples can find on test code.

### Example: all

```ts
import { all } from "func-toolkit";

const data = [2, 10, 4, 6];
const isAllEven = all(data, element => element % 2 == 0);
```

### Example: andThen

```ts
import { andThen } from "func-toolkit";

function f(x) {
  return 2 * x;
}

function g(x) {
  return x + 2;
}

const fg = andThen(f, g);
fg(3); // 8
```

### Example: compose

```ts
import { compose } from "func-toolkit";

function f(x) {
  return 2 * x;
}

function g(x) {
  return x + 2;
}

const gf = compose(
  f,
  g
);
gf(4); // 12
```
