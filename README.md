# from-object

Convert an object of objects into an array of objects.
Order is not guaranteed.

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

fromObject(example, 'id') // id is optional.
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
