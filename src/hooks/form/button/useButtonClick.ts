import { ButtonAbleModeEnum } from "@/enums/form/formEnum.ts";
import { Ref } from "vue";
import debounce from "@/utils/debounce.ts";
import throttle from "@/utils/throttle.ts";

export default function useButtonClick() {

  const disableRef: Ref<boolean> = ref(false);
  let lastHandleFunction: Function = new Function();
  let debouncedHandleFunction: Function = new Function();
  let throttledHandleFunction: Function = new Function();
  const handleButtonClick = (ableMode: ButtonAbleModeEnum, handleFunction: Function) => {
    if (lastHandleFunction !== handleFunction) {
      console.log("不相等了");
      lastHandleFunction = handleFunction;
      debouncedHandleFunction = debounce(handleFunction, 1000);
      throttledHandleFunction = throttle(handleFunction, 1000);
    } else {
      console.log("相等了");
    }
    switch (ableMode) {
      // 可以随意点击
      case ButtonAbleModeEnum.FREE:
        if (handleFunction) handleFunction();
        break;
      // 点击一次后禁用按钮
      case ButtonAbleModeEnum.ONCE:
        if (handleFunction) handleFunction();
        disableRef.value = true;
        break;
      // 防抖
      case ButtonAbleModeEnum.DEBOUNCE:
        if (handleFunction) debouncedHandleFunction();
        break;
      // 节流
      case ButtonAbleModeEnum.THROTTLE:
        if (handleFunction) throttledHandleFunction();
        break;
      // 其他情况：点击一次禁用按钮
      default:
        if (handleFunction) handleFunction();
        disableRef.value = true;
        break;
    }
  };

  return {
    disableRef,
    handleButtonClick,
  };
}