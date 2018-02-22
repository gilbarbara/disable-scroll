disable scroll
===

[![NPM version](https://badge.fury.io/js/disable-scroll.svg)](https://www.npmjs.com/package/disable-scroll)
[![build status](https://travis-ci.org/gilbarbara/disable-scroll.svg)](https://travis-ci.org/gilbarbara/disable-scroll)
[![Maintainability](https://api.codeclimate.com/v1/badges/6a4bbda8255037dca13f/maintainability)](https://codeclimate.com/github/gilbarbara/disable-scroll/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6a4bbda8255037dca13f/test_coverage)](https://codeclimate.com/github/gilbarbara/disable-scroll/test_coverage)

**Prevent page scrolling like a boss.**  
Supports `scroll, wheel, touchmove, keydown` events.

[Demo](https://v3yxl1z2w3.codesandbox.io/)

## Setup

### npm
```bash
npm install --save disable-scroll
```

and import it

```javascript
import disableScroll from 'disable-scroll';
```

## Usage

```javascript
disableScroll.on(); // prevent scrolling
...
disableScroll.off(); // re-enable scroll
```

## API

### .on([element], [options])
Disable page scroll by adding event listeners and locking the scroll position.

- `[element]` - DOM Element. Defaults to `document.scrollingElement`
- `[options]` - Change the initial options. Defaults to: 

```javascript
{
    disableWheel: true,
    disableScroll: true,
    disableKeys: true,
    keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
}
```

### .off()
Re-enable page scrolling and remove the listeners.

---

Inspired by [jquery-disablescroll](https://github.com/ultrapasty/jquery-disablescroll)
