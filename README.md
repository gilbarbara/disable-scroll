disable scroll
===

<a href="https://www.npmjs.com/package/disable-scroll" target="_blank">![](https://badge.fury.io/js/disable-scroll.svg)</a> ![](https://badge.fury.io/bo/disable-scroll.svg) <a href="https://travis-ci.org/gilbarbara/disable-scroll" target="_blank">![](https://travis-ci.org/gilbarbara/disable-scroll.svg)</a>

**Prevent page scrolling like a boss.**  
Supports `scrollbar, mousewheel, touchmove, keydown` events.

<a href="http://gilbarbara.github.io/disable-scroll/" target="_blank">Demo</a>

## Install

### npm
```javascript
npm install --save disable-scroll
```

and require it

```javascript
var disableScroll = require('disable-scroll');
```

### bower
```javascript
bower install --save disable-scroll
```

Reference the script in your html file

```html
<script src="disable-scroll.min.js"></script>
```

## Usage

```javascript
disableScroll.on(); // prevent scrolling
...
disableScroll.off(); // re-enable scroll
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
Re-enable page scrolling and destroy the listeners.

---

Inspired by [jquery-disablescroll](https://github.com/ultrapasty/jquery-disablescroll)
