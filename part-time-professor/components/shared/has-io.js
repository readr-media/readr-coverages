const isInBrowser = typeof window === 'object';
const doesWindowHaveIo =
  isInBrowser &&
  'IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype;

if (doesWindowHaveIo) {
  /**
   * Minimal polyfill for Edge 15's lack of `isIntersecting`
   * See: https://github.com/w3c/IntersectionObserver/issues/211
   */
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(
      window.IntersectionObserverEntry.prototype,
      'isIntersecting',
      {
        get() {
          return this.intersectionRatio > 0;
        },
      }
    );
  }
}

export { doesWindowHaveIo };
