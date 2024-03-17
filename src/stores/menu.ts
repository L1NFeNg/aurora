import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { MenuProps } from "@/types/layout.d.ts";

export const useMenuStore =
  defineStore("menu", () => {
      const checkedMenuRef: Ref<Nullable<MenuProps>> = ref(null);

      return { checkedMenuRef };
    },
    {
      persist: true,
    });