import 'scrollingelement';

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
      disableScroll: true,
      disableKeys: true,
      keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
      // space: 32, page up: 33, page down: 34, end: 35, home: 36
      // left: 37, up: 38, right: 39, down: 40
    };

    this.element = canUseDOM ? document.scrollingElement : null;
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

    const { disableKeys, disableScroll, disableWheel } = this.options;

    if (disableWheel) {
      document.addEventListener('wheel', this.handleWheel);
      document.addEventListener('touchmove', this.handleWheel);
    }

    if (disableScroll) {
      this.lockToScrollPos = [
        this.element.scrollLeft || this.element.scrollX,
        this.element.scrollTop || this.element.scrollY
      ];
      document.addEventListener('scroll', this.handleScroll);
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

    document.removeEventListener('wheel', this.handleWheel);
    document.removeEventListener('touchmove', this.handleWheel);
    document.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleWheel = (e) => {
    e.preventDefault();
  };

  handleScroll = () => {
    window.scrollTo(...this.lockToScrollPos);
  };

  handleKeydown = (e) => {
    let keys = [...this.options.keyboardKeys];

    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
      keys = keys.slice(1);
    }

    if (keys.includes(e.keyCode)) {
      e.preventDefault();
    }
  }
}

export default new DisableScroll();
