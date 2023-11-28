declare global {
  interface Window {
    _gs: (...args: any[]) => void;
  }
}
