disable scroll
===

<a href="https://www.npmjs.com/package/disable-scroll" target="_blank">![](https://badge.fury.io/js/disable-scroll.svg)</a> <a href="https://travis-ci.org/gilbarbara/disable-scroll" target="_blank">![](https://travis-ci.org/gilbarbara/disable-scroll.svg)</a>

**Prevent page scrolling like a boss.**  
Supports `scrollbar, mousewheel, touchmove, keydown` events.

## Install

```javascript
npm install --save disable-scroll
```

## Usage
```javascript
var disableScroll = require('disable-scroll');

disableScroll.on();
...
disableScroll.off();
```

## API

### .on([element], [options])
Disable page scrolling by adding event listeners and locking the scroll position.

- `[element]` - DOM Element. Defaults to `document.body`
- `[options]` - Change the initial options. Defaults to: 

```javascript
{
    disableWheel: true,
    disableScrollbar: true,
    disableKeys: true,
    scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
}
```

### .off()
Re-enable page scrolling and remove the listeners.

---

Inspired by [jquery-disablescroll](https://github.com/ultrapasty/jquery-disablescroll)