import disableScroll from '../src/index';

global.scrollTo = () => {};

describe('disable-scroll', () => {
  it('should have initialized', () => {
    expect(disableScroll.element).toBe(document.body);
  });

  it('should have added the listeners ', () => {
    // add spies
    disableScroll.on();
    document.dispatchEvent(new Event('scroll'));
    document.dispatchEvent(new Event('mousewheel'));
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 32 }));
    // trigger events
    // check if the spies got them.
  });

  it('should have added the listeners ', () => {
    disableScroll.off();
    // trigger events
    // make sure the spy weren't triggered
  });
});
