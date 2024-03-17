import { ref, Ref } from "vue";
import { Menu } from "@/layouts/aside/type.ts";

export default function useMenuChecked() {
  const checkedMenuRef: Ref<Nullable<Menu>> = ref(null);
  const handleCheckedMenu = (menu: Menu) => {
    if (checkedMenuRef.value === menu) {
      return;
    } else {
      checkedMenuRef.value = menu;
      console.log(checkedMenuRef.value);
    }
  };
  return {
    checkedMenuRef,
    handleCheckedMenu,
  };
}