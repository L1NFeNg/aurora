export function debounceRef(value: any, duration: number = 1000) {
  let timer: NodeJS.Timeout;
  return customRef((track: any, trigger: any) => {
    return {
      get() {
        track();
        return value;
      },
      set(val: any) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          trigger();
          value = val;
        }, duration);
      },
    };
  });
}