import { onMounted, Ref, ref } from "vue";
import { Menu } from "@/layouts/aside/type.ts";
import axios from "axios";

export default function useMenuList() {
  const menuListRef: Ref<Nullable<Menu[]>> = ref([]);
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