const canUseDOM = !!(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

class DisableScroll {
  constructor() {
    this.element = null;
    this.lockToScrollPos = [0, 0];
    this.options = {
      disableWheel: true,
      disableScroll: true,
      disableKeys: true,
      keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
      authorizedInInputs: [32, 37, 38, 39, 40]
      // space: 32, page up: 33, page down: 34, end: 35, home: 36
      // left: 37, up: 38, right: 39, down: 40
    };

    /* istanbul ignore else */
    if (canUseDOM) {
      require('scrollingelement');
      this.element = document.scrollingElement;
    }
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

    const { disableKeys, disableScroll, disableWheel } = this.options;

    /* istanbul ignore else */
    if (disableWheel) {
      document.addEventListener('wheel', this.handleWheel, { passive: false });
      document.addEventListener('touchmove', this.handleWheel, { passive: false });
    }

    /* istanbul ignore else */
    if (disableScroll) {
      this.lockToScrollPos = [
        this.element.scrollLeft || this.element.scrollX,
        this.element.scrollTop || this.element.scrollY
      ];
      document.addEventListener('scroll', this.handleScroll, { passive: false });
    }

    /* istanbul ignore else */
    if (disableKeys) {
      document.addEventListener('keydown', this.handleKeydown, { passive: false });
    }
  }

  /**
   * Re-enable page scrolls
   */
  off() {
    if (!canUseDOM) return;

    document.removeEventListener('wheel', this.handleWheel, { passive: false });
    document.removeEventListener('touchmove', this.handleWheel, { passive: false });
    document.removeEventListener('scroll', this.handleScroll, { passive: false });
    document.removeEventListener('keydown', this.handleKeydown, { passive: false });
  }

  handleWheel = (e) => {
    e.preventDefault();
  };

  handleScroll = () => {
    window.scrollTo(...this.lockToScrollPos);
  };

  handleKeydown = (e) => {
    let keys = this.options.keyboardKeys;

    /* istanbul ignore else */
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
      keys = this.options.authorizedInInputs;
    }

    /* istanbul ignore else */
    if (keys.includes(e.keyCode)) {
      e.preventDefault();
    }
  }
}

export default new DisableScroll();
