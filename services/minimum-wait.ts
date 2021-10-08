export function minimumWait(waitFor: Function, callback: Function, wait: number) {
  const timestamp = performance.now();

  waitFor().then(() => {
    const duration = performance.now() - timestamp;
    setTimeout(callback, duration > wait ? 0 : wait - duration);
  });
}
