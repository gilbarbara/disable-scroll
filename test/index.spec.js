import disableScroll from '../src/index';

global.scrollTo = () => {};

describe('disable-scroll', () => {
  const scrollListener = jest.spyOn(disableScroll, 'handleScroll');
  const wheelListener = jest.spyOn(disableScroll, 'handleWheel');
  const keyboardListener = jest.spyOn(disableScroll, 'handleKeydown');

  it('should have initialized', () => {
    expect(disableScroll.element).toBe(document.scrollingElement);
  });

  it('should have added the listeners when turning it ON', () => {
    disableScroll.on();
    document.dispatchEvent(new Event('scroll'));
    document.dispatchEvent(new Event('wheel'));
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 32 }));

    expect(scrollListener).toHaveBeenCalledTimes(1);
    expect(wheelListener).toHaveBeenCalledTimes(1);
    expect(keyboardListener).toHaveBeenCalledTimes(1);
  });

  it('should have removed the listeners ', () => {
    disableScroll.off();

    document.dispatchEvent(new Event('scroll'));
    document.dispatchEvent(new Event('wheel'));
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 32 }));

    expect(scrollListener).toHaveBeenCalledTimes(1);
    expect(wheelListener).toHaveBeenCalledTimes(1);
    expect(keyboardListener).toHaveBeenCalledTimes(1);
  });
});
