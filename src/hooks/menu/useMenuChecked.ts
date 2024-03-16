import { ref, Ref } from "vue";
import { Menu } from "@/layouts/aside/type.ts";

export default function useMenuChecked() {
  const checkedMenuRef: Ref<Nullable<Menu>> = ref(null);
  const checkedMenuHandle = (menu: Menu) => {
    if (checkedMenuRef.value === menu) {
      return;
    } else {
      checkedMenuRef.value = menu;
    }
  };
  return {
    checkedMenuRef,
    checkedMenuHandle,
  };
}