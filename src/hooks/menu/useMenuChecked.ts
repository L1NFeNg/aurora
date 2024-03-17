import { Menu } from "@/layouts/aside/type.ts";
import { useMenuStore } from "@/stores/menu.ts";
import { storeToRefs } from "pinia";

export default function useMenuChecked() {
  const store = useMenuStore();
  const { checkedMenuRef } = storeToRefs(store);
  const handleCheckedMenu = (menu: Menu) => {
    if (checkedMenuRef.value === menu) {
      return;
    } else {
      checkedMenuRef.value = menu;
    }
  };
  return {
    checkedMenuRef,
    handleCheckedMenu,
  };
}