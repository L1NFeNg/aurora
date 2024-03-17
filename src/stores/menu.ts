import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { Menu } from "@/layouts/aside/type.ts";

export const useMenuStore =
  defineStore("menu", () => {
      const checkedMenuRef: Ref<Nullable<Menu>> = ref(null);

      return { checkedMenuRef };
    },
    {
      persist: true,
    });