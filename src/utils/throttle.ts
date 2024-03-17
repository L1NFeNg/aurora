// 节流函数，用于限制函数在一定时间内的调用次数
export default function throttle(func: Function, delay: number): Function {
  let lastExecTime = 0; // 上次执行函数的时间戳
  let timer: number | null | NodeJS.Timer; // 定时器变量

  // 返回一个函数作为节流后的函数
  return function (this: any, ...args: any[]) {
    const context = this; // 保存函数调用时的上下文
    const currentTime = Date.now(); // 获取当前时间戳

    // 计算距离上次执行函数的时间间隔
    const timeSinceLastExec = currentTime - lastExecTime;

    // 如果距离上次执行函数的时间间隔大于等于延迟时间，则执行函数
    if (timeSinceLastExec >= delay) {
      func.apply(context, args); // 调用原函数，并传入原始参数
      lastExecTime = currentTime; // 更新上次执行函数的时间戳
    } else {
      // 如果距离上次执行函数的时间间隔小于延迟时间，则延迟执行函数
      clearTimeout(timer as number); // 清除之前的定时器
      timer = setTimeout(function () {
        func.apply(context, args); // 调用原函数，并传入原始参数
        lastExecTime = Date.now(); // 更新上次执行函数的时间戳
      }, delay - timeSinceLastExec);
    }
  };
}