import { ButtonAutoDisableModeEnum } from "@/enums/form/formEnum.ts";
import { Ref } from "vue";


export default function useButtonDisable() {
  const disableRef: Ref<boolean> = ref(false);
  const autoDisableRef: Ref<boolean> = ref(false);
  let timerId: NodeJS.Timeout;
  // 点击后处理按钮禁用状态
  const handleAutoDisable = (ableMode: ButtonAutoDisableModeEnum, clickDuration: number) => {
    switch (ableMode) {
      // 可以随意点击
      case ButtonAutoDisableModeEnum.NEVER:
        break;
      // 点击一次后禁用按钮
      case ButtonAutoDisableModeEnum.ONCE:
        autoDisableRef.value = true;
        break;
      // 间歇可点击
      case ButtonAutoDisableModeEnum.INTERVAL:
        autoDisableRef.value = true;
        timerId = setTimeout(() => {
          autoDisableRef.value = false;
        }, clickDuration);
        break;
      // 其他情况：点击一次禁用按钮
      default:
        autoDisableRef.value = true;
        break;
    }
  };

  const setDisableRef = (disableProp: boolean) => {
    onMounted(() => {
      disableRef.value = disableProp || autoDisableRef.value;
    });
    watchEffect(() => {
      disableRef.value = disableProp || autoDisableRef.value;
    });
  };

  onMounted(() => {
    clearTimeout(timerId);
  });


  return {
    autoDisableRef,
    disableRef,
    handleAutoDisable,
    setDisableRef,
  };
}