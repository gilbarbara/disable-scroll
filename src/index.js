const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

class DisableScroll {
  constructor() {
    if (!canUseDOM) return;

    this.options = {
      disableWheel: true,
      disableScrollbar: true,
      disableKeys: true,
      scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
      // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
      // left: 37, up: 38, right: 39, down: 40
    };

    this.element = document.body;
    this.lockToScrollPos = [0, 0];
  }

  /**
   * Disable Page Scroll
   * @external Node
   *
   * @param {HTMLElement} [element] - DOM Element, usually document.body
   * @param {object} [options] - Change the initial options
   */
  on(element, options) {
    if (!canUseDOM) return;

    this.element = element || this.element;
    this.options = {
      ...this.options,
      ...options,
    };

    const { disableKeys, disableScrollbar, disableWheel } = this.options;

    if (disableWheel) {
      document.addEventListener('mousewheel', this.handleWheel);
      document.addEventListener('touchmove', this.handleWheel);
    }

    if (disableScrollbar) {
      this.lockToScrollPos = [
        this.element.scrollX,
        this.element.scrollY
      ];
      document.addEventListener('scroll', this.handleScrollbar);
    }

    if (disableKeys) {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }

  /**
   * Re-enable page scrolls
   */
  off() {
    if (!canUseDOM) return;

    document.removeEventListener('mousewheel', this.handleWheel);
    document.removeEventListener('touchmove', this.handleWheel);
    document.removeEventListener('scroll', this.handleScrollbar);
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleWheel = (e) => {
    e.preventDefault();
  };

  handleScrollbar = () => {
    window.scrollTo(this.lockToScrollPos[0], this.lockToScrollPos[1]);
  };

  handleKeydown = (event) => {
    for (let i = 0; i < this.options.scrollEventKeys.length; i++) {
      if (event.keyCode === this.options.scrollEventKeys[i]) {
        event.preventDefault();
        return;
      }
    }
  }
}

export default new DisableScroll();
