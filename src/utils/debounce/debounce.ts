// 防抖函数，用于延迟执行函数，直到某个连续的事件停止触发一段时间后
export default function debounce(func: Function, delay: number): Function {
  let timer: number | null | NodeJS.Timer; // 定时器变量

  // 返回一个函数作为防抖后的函数
  return function (this: any, ...args: any[]) {
    const context = this; // 保存函数调用时的上下文
    clearTimeout(timer as number); // 清除之前的定时器

    // 创建新的定时器，延迟执行传入的函数
    timer = setTimeout(function () {
      func.apply(context, args); // 调用原函数，并传入原始参数
    }, delay);
  };
}