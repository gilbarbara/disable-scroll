disable scroll
===

[![NPM version](https://badge.fury.io/js/disable-scroll.svg)](https://www.npmjs.com/package/disable-scroll) [![build status](https://travis-ci.org/gilbarbara/disable-scroll.svg)](https://travis-ci.org/gilbarbara/disable-scroll) [![Maintainability](https://api.codeclimate.com/v1/badges/6a4bbda8255037dca13f/maintainability)](https://codeclimate.com/github/gilbarbara/disable-scroll/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/6a4bbda8255037dca13f/test_coverage)](https://codeclimate.com/github/gilbarbara/disable-scroll/test_coverage)

**Prevent page scrolling like a boss.**  
Supports `scroll, wheel, touchmove, keydown` events.

[Demo](https://codesandbox.io/s/github/gilbarbara/disable-scroll/tree/master/demo)

## Setup

### npm
```bash
npm install --save disable-scroll
```

and import it

```typescript
import disableScroll from 'disable-scroll';
```

## Usage

```typescript
disableScroll.on(); // prevent scrolling
...
disableScroll.off(); // re-enable scroll
```

> If you need to support legacy browsers you need to include the scrollingelement polyfill.

## API

### .on(element?: Element, options?: Options)
Disable page scroll by adding event listeners and locking the scroll position.

Options defaults to: 

```typescript
{
    authorizedInInputs: [32, 37, 38, 39, 40],
    disableKeys: true,
    disableScroll: true,
    disableWheel: true,
    keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
}
```

### .off()
Re-enable page scrolling and remove the listeners.

## Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/gilbarbara/disable-scroll/issues).

## License

MIT

---

Inspired by [jquery-disablescroll](https://github.com/ultrapasty/jquery-disablescroll)
