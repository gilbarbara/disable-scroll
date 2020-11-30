declare module 'disable-scroll' {
  export interface DisableScrollOptions {
    disableWheel: boolean;
    disableScroll: boolean;
    disableKeys: boolean;
    keyboardKeys: number[];
    authorizedInInputs: number[];
  }

  export function on(element?: HTMLElement, options?: DisableScrollOptions): void;
  export function off(): void;
}
