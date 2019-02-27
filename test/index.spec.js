import disableScroll from '../src/index';

global.scrollTo = () => {};

describe('disable-scroll', () => {
  const scrollListener = jest.spyOn(disableScroll, 'handleScroll');
  const wheelListener = jest.spyOn(disableScroll, 'handleWheel');
  const keyboardListener = jest.spyOn(disableScroll, 'handleKeydown');

  afterEach(() => {
    jest.clearAllMocks();
  });

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

    expect(scrollListener).toHaveBeenCalledTimes(0);
    expect(wheelListener).toHaveBeenCalledTimes(0);
    expect(keyboardListener).toHaveBeenCalledTimes(0);
  });

  it('should not prevent space in input', () => {
    disableScroll.on();

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'test-input');
    document.body.appendChild(input);
    const dispatched = input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, keyCode: 32 }));

    expect(keyboardListener).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(true);
  });

  it('should prevent page down in input', () => {
    disableScroll.on();

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'test-input');
    document.body.appendChild(input);
    const dispatched = input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, keyCode: 34 }));

    expect(keyboardListener).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(false);
  });
});
