import { onMounted, Ref, ref } from "vue";
import { MenuProps } from "@/types/layout";
import axios from "axios";

export default function useMenuList() {
  const menuListRef: Ref<Nullable<MenuProps[]>> = ref([]);
  const getMenuList = async () => {
    await axios.get("/mock/menu/getMenuList").then(res => {
      menuListRef.value = res.data.data.menus;
    });
  };

  onMounted(async () => {
    await getMenuList();
  });

  return {
    menuListRef,
  };
}