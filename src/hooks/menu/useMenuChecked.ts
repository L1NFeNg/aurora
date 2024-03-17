import { MenuProps } from "@/types/layout.d.ts";
import { useMenuStore } from "@/stores/menu.ts";
import { storeToRefs } from "pinia";

export default function useMenuChecked() {
  const store = useMenuStore();
  const { checkedMenuRef } = storeToRefs(store);
  const handleCheckedMenu = (menu: MenuProps) => {
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