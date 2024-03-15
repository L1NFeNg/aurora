import { computed, onMounted, onUnmounted, Ref, ref } from "vue";
import { filter } from "@/utils/todoStorage.ts";

const VALID_HASH = ["all", "active", "completed"];

export default function useFilter(todoListRef: Ref<any[]>) {
  const visibilityRef = ref("all");

  const onhashchange = () => {
    const hash = location.hash.replace(/#\/?/, "");
    if (VALID_HASH.includes(hash)) {
      // 有效的
      visibilityRef.value = hash;
    } else {
      location.hash = "";
      visibilityRef.value = "all";
    }
  };

  const filteredTodoListRef = computed(() => {
    return filter(todoListRef.value, visibilityRef.value);
  });

  const remainingCountRef = computed(() => {
    return filter(todoListRef.value, "active").length;
  });

  const completedCountRef = computed(() => {
    return filter(todoListRef.value, "completed").length;
  });

  // 1.组件挂载完成的生命周期函数
  onMounted(() => {
    window.addEventListener("hashchange", onhashchange);
  });

  // 2.组件销毁过后的生命周期函数
  onUnmounted(() => {
    window.removeEventListener("hashchange", onhashchange);
  });

  return {
    visibilityRef,
    filteredTodoListRef,
    remainingCountRef,
    completedCountRef
  };
}