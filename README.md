# from-object

Convert an `object of objects` into an `array of objects`.
Order is not guaranteed.

## Installation

`yarn add from-object` or `npm install from-object --save`

## Usage

```js
import { fromObject } from 'from-object'

const example = {
  jim: {
    name: 'Jim',
    age: 20,
  },
  tim: {
    name: 'Tim',
    age: 22,
  },
}

fromObject(example, 'id') // id is optional: set an identifier, could be anything
```

Should output:

```js
[
  {
    id: 'jim', // this will not be here if you don't pass the second argument
    name: 'Jim',
    age: 20,
  },
  {
    id: 'tim', // this will not be here if you don't pass the second argument
    name: 'Tim',
    age: 22,
  },
]
```

## License

MIT
