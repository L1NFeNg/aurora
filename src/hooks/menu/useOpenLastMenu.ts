import { useMenuStore } from "@/stores/menu.ts";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";

export default function useOpenLastMenu() {
  const store = useMenuStore();
  const { checkedMenuRef } = storeToRefs(store);
  const router = useRouter();
  const route = useRoute();
  // 当选中路由与当前路由不一致时，进入选中路由
  if (route.fullPath !== checkedMenuRef?.value?.route) {
    router.push(checkedMenuRef!.value!.route!).catch(() => {
      new Error("重新打开上次的页面失败。");
    });
  }
}