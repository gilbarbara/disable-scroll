declare const global: any;

global.requestAnimationFrame = (callback: () => void) => {
  setTimeout(callback, 0);
};

global.matchMedia = () => ({
  matches: false,
  addListener: () => undefined,
  removeListener: () => undefined,
});

export {};
